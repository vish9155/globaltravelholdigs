import express from 'express'

import { cars } from '../controllers/carsControllers.js'

let router=express.Router()

router.post("/cars",cars)


export default router