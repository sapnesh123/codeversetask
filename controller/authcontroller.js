import customer from "../model/customer.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createcustomer=async(req,res)=>{
    try {
        const {name,email,password,role}=req.body
        console.log(req.body)
        const existingcoustomer=await customer.findOne({email:email})

        if(existingcoustomer)
        {
         res.status(500).json({status:false,message:'customer alrady exist'})
        }
        const salt = 10
         const hash = bcrypt.hashSync(password, salt);
         if(hash)
         {
           req.body.password=hash
         }

          const newcustomer=await customer.create(req.body)
          res.status(200).json({status:true,
            message:`${role} created successful`,
            data:newcustomer
         })
        
        } catch (error) {
        res.status(500).json({status:false,message:error})
    }
}

export const customerlogin=async(req,res)=>{
    try {
        const {email,password}=req.body
        let existingcoustomer=await customer.findOne({email:email})

        if(!existingcoustomer)
        {
         res.status(500).json({status:false,message:'customer does not exist'})
        }
          

      const matchedcustomer=bcrypt.compareSync(password, existingcoustomer.password);
        if(matchedcustomer===true)
        {
        let payload={
            name:existingcoustomer.name,
            email:existingcoustomer.email,
            role:existingcoustomer.role
        }
        console.log('payload',payload)

        const token= jwt.sign({
            payload},'secrete')
         if(token)
         {
          res.status(200).json({status:true,message:'login succesful'})
          }
        }else{
            res.status(401).json({status:false,message:'credential does not macted'})
        }

        } catch (error) {
        res.status(500).json({status:false,message:error})
    }
}