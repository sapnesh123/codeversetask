import jwt from 'jsonwebtoken'

export const verify=()=>{
    const token=req.headers.authorization?.split('')[1];
    if(!token)
    {
        res.status(401).json({status:false,message:'token not found'})
    }

    try {
        req.user=jwt.verify(token,'secerte')
        next()
    } catch (error) {
        res.status(401).json({status:false,message:'invalidtoken'})
    }
}