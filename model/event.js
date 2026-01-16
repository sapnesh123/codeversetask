import mongoose, { Schema } from 'mongoose'

const Eventschema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'name is required'],
        trim:true
    },
     status:{
        type:String,
        required:[true,'status is required'],
        trim:true,
        deafult:'draft'
    },
    seats:{
        type:String,
        required:[true,'status is required'],
        trim:true  
    },
    city:{
          type:String,
        required:[true,'city is required'],
        trim:true
    },
     avilablseats:{
        type:String,
        
     },
     Date:{
        type:String
     }

    


})

const Event=mongoose.model('Event',Eventschema)

export default Event;