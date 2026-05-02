import express from 'express'

import { hotels } from '../controllers/hotelControllers.js'
let router=express.Router()


router.post("/hotels",hotels)

export default router