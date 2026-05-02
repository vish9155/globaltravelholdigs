import loggers from "../utils/loggers.js";

export let errormidd=(error,req,resp,next)=>{
    loggers.error(error.message);
    resp.status(500).send({
            message:"internal error",
            error:error.message,
            
        })
    
}

// import dotenv from 'dotenv'
// dotenv.config()
// import Joi from "joi";
// import client from '../config/redisConfig.js';
// import { getAccessToken } from '../oAuths/amadeusToken.js';
// import { getCacheSWR } from "../utils/cache.js";
// import { dedupe } from '../utils/dedupe.js';



// // let flightSchema = Joi.object({
// //   from: Joi.string().required(),
// //   to: Joi.string().required(),
// //   departDate: Joi.date().required(),
// //   classe: Joi.string().required(),
// //   adult: Joi.number().min(1).required(),
 
// // });


// export let fligtsDatas = async (req, res) => {
//   try {
//      let {
//       from,
//       to,
//       departDate,
//       returnDate,
//       classe,
//       adult,
//       children,
//       infant,
//     } = req.body;
//     // let { error } = flightSchema.validate({
//     //   from,
//     //   to,
//     //   departDate,
//     //   classe,
//     //   adult,
     
//     // })
//     // if (error) {
//     //   if (error) return res.status(400).json({ message: error.message });
//     // }
   


//     let cacheKey = `flights:${from}-${to}-${departDate}-${returnDate}-${classe}-${adult}`


//     let data = await dedupe(cacheKey, await getCacheSWR(
//       cacheKey,
//       async () => {
//         let token = await getAccessToken();

//         let url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${departDate}&adults=${adult}&travelClass=${classe}`;

//         if (returnDate) url += `&returnDate=${returnDate}`;
//         if (infant) url += `&infants=${infant}`;
//         if (children) url += `&children=${children}`;

//         let response = await fetch(url, {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         let flightData = await response.json();

//         return flightData;
//       },
//       600 //  TTL (10 min)
//     ))
    
   

//     return res.json({
//       message: "success",
//       data,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };
// export let searchLocation = async (req, res) => {
//   try {
//     let { keyword } = req.query

//     let token = await getAccessToken()
//     console.log()

//     let url = `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${keyword}&subType=AIRPORT,CITY`

//     let response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })

//     let data = await response.json()

//     return res.json({
//       "message": "data fetch",
//       status: true,
//       data: [data]
//     })

//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: "Location search error" })
//   }
// }