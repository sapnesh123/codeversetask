import mongoose, { Schema } from 'mongoose'

const bookingschema=new mongoose.Schema({
    bookingcode:{
        type:String,
 },
   
 quantity:{
        type:String,
        
     },
     eventid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'event'
     },
      coustomer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer'
     }

    


})

const booking=mongoose.model('booking',bookingschema)

export default booking