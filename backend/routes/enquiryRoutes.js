import express from 'express'
import { enquiryForm } from '../controllers/enquiryControllers.js'


let router=express.Router()

router.post("/enquiry",enquiryForm)

export default router