import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import router  from './routes.js'
const app = express()

app.use(express.json())
app.use(urlencoded({extends:true}))
app.use('/api',router)


const mongodb=async()=>{
    try {
         const res= await mongoose.connect('mongodb://localhost:27017/codeverse')
    console.log('db connected ') 
    } catch (error) {
        console.log(error)
    }
  
}
mongodb()

app.listen(3000,()=>{
console.log('server start')
})