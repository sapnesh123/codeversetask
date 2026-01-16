import express from  'express'
import * as authcontroller from './controller/authcontroller.js'
import * as eventcontroller from './controller/eventcontroller.js'
// import verify from './middleware/auth.js'
const router=express.Router()
router.post('/auth/create',authcontroller.createcustomer)
router.post('/auth/login',authcontroller.customerlogin)
router.post('/event/create',eventcontroller.eventcreate)
router.patch('/event/:id',eventcontroller.eventupdate)
router.post('/event/:id/publish',eventcontroller.eventpublish)
router.post('/event/:id/cancelled',eventcontroller.eventcancelled)


export default router

