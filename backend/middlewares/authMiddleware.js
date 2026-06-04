import jwt from 'jsonwebtoken'
export let authmidd=async(req,resp,next)=>{
    try {
        
        let token=req.cookies['token'];
        // console.log(req.cookies.token,"no token",token)
        if(!token){
            return resp.send({
                message:"token not found in auth",
                status:false,
                token
            })
        }

        let decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=decode;
        // console.log(decode,req.user,req.user.id)
        // console.log("this is id",req.user.id)
        next()

    } catch (error) {
         resp.send({ message: "internal server error auth middleware",error:error.message, success: false,})
    }
}