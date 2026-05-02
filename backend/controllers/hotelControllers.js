// in amadeus hotels api first you can find hotel id then you find hotels


import dotenv from 'dotenv'
import { getAccessToken } from '../oAuths/amadeusToken.js';
import client from '../config/redisConfig.js';
dotenv.config()

export let hotels = async (req, res) => {
    try {

        let token = await getAccessToken()
        console.log(token)



        let { cityCode, checkIn, checkOut, rooms, totalGuests } = req.body;

        let hotelKey = `hotels:${cityCode}-${checkIn}-${checkOut}-${rooms}-${totalGuests}`
        let hotelCache = await client.get(hotelKey)
        if (hotelCache) {
            return res.json({
                status: true,
                message: "Hotel Cache Data",
                data: JSON.parse(hotelCache)
            })
        }

        // 1. yeah hotel ke sare id location dega
        let hotelListUrl = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`

        let hotelResp = await fetch(hotelListUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        let hotelList = await hotelResp.json()
      console.log(hotelList)
        // let hotelIds = hotelList.data.slice(0,5).map(h => h.hotelId).join(',')

  
    
       
    let validHotels = []

   
    for (let hotel of hotelList.data.slice(0, 10)) {
      let id = hotel.hotelId

            // yeah pura hotels details de dega
      let url = `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${id}&checkInDate=${checkIn}&checkOutDate=${checkOut}&adults=${Number(totalGuests)}&roomQuantity=${Number(rooms)}`

      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      let data = await resp.json()

    
      if (!data.errors && data.data) {
        validHotels.push(data.data[0])
      }

     
      if (validHotels.length >= 10) break
    }

    await client.set(hotelKey, JSON.stringify(validHotels), {
      EX: 600
    })

    return res.json({
      status: true,
      message: "Fresh Hotel Data",
      data: validHotels
    })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Something went wrong in hotels api" })
    }
}