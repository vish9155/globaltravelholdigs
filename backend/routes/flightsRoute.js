import express from 'express'
import { fligtsDatas, searchLocation } from '../controllers/flightsController.js'

let router=express.Router()

router.post("/flights",fligtsDatas)
router.get("/flight/location",searchLocation)

export default router