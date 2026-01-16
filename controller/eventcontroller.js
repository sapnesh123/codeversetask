
import Event from "../model/event.js"

export const eventcreate=async(req,res)=>{
    console.log(req.body)
   const event=await Event.create(req.body)


}


export const eventupdate=async(req,res)=>{
try {
    const event=await Event.findOneAndUpdate({
        _id:req.params.id,
       },{$set:req.body},{new:true})
       console.log('req.params.id',req.params.id)
    } catch (error) {
    console.log(error)
      }
   
}

export const eventpublish=async(req,res)=>{

try {
       const event=await Event.findOneAndUpdate({
        _id:req.params.id,
       },{$set:{status:req.body.status}},{new:true})
} catch (error) {
    console.log(error)
}
}

export const eventcancelled=async(req,res)=>{

  try {
       const event=await Event.findOneAndUpdate({
        _id:req.params.id,
       },{$set:{status:req.body.status}},{new:true})
} catch (error) {
    console.log(error)
}
}