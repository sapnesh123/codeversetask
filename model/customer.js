import mongoose, { Schema } from 'mongoose'

const coustomerschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true
    },
        email:{
        type:String,
        unique:true,
        required:[true,'email is required'],
        trim:true
    },

    password:{
        type:String,
        required:[true,'password is required'],

    },
     role:{
        type:String,
        required:[true,'role is required'],
        trim:true
    },

})

const customer=mongoose.model('customer',coustomerschema)

export default customer