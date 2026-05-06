import express from 'express'
import { fligtsDatas, offerData, searchLocation } from '../controllers/flightsController.js'

let router=express.Router()

router.post("/flights",fligtsDatas)
router.get("/flight/location",searchLocation)
router.get("/get-offers/:offerId",offerData)
export default router