import dotenv from 'dotenv'
import { getAccessToken } from '../oAuths/amadeusToken.js';
import client from '../config/redisConfig.js';
dotenv.config()

export let cars = async (req, res) => {
    try {
        let { pickup, drop, pickupDate, dropDate, pickUpTime, dropTime, age } = req.body;
       let pickupDateTime = `${pickupDate}T${pickUpTime}`
let DropDateTime = `${dropDate}T${dropTime}`
        let tokens = await getAccessToken()
        let cacheKey = `cars:${pickup}-${drop}-${pickupDateTime}-${DropDateTime}-${age}`
        let cacheData = await client.get(cacheKey)
        if (cacheData) {
            return res.json({
                status: true,
                message: "cache Data",
                data: JSON.parse(cacheData)
            })
        }
        let url = `https://test.api.amadeus.com/v1/shopping/car-rental-offers?pickUpLocationCode=${pickup}&dropOffLocationCode=${drop}&pickUpDateTime=${pickupDateTime}&dropOffDateTime=${DropDateTime}&driverAge=${age}`
        let resp = await fetch(url, {
            headers: {
                Authorization: `Bearer ${tokens}`
            }
        })
        let carsData = await resp.json()
        if(!carsData.errors){
            await client.set(cacheKey,JSON.stringify(carsData),{
                EX:60
            })
        }
        return res.send({
            status: true,
            message: "fresh Data",
            data: carsData
        })
    } catch (error) {
  console.error(error)
        res.status(500).json({ error: "Something went wrong in hotels api" })
    }
}