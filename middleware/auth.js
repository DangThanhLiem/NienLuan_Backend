import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.json({
            success:false,
            message:"Unauthorized"
        })
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.user_id = token_decode.id;
        next();
    }catch(error){
        console.log(error);
        return res.json({success:false,message:"Error in token verification"});
    }
}

export default authMiddleware;
