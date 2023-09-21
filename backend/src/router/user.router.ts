import { Router } from "express";
import { sample_users } from "../data";
import  jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants.ts/http_status";
import  bcrypt  from 'bcryptjs';
;

const router = Router()



router.get("/seed", asyncHandler(
  async(req,res)=>{

    const userCount = await UserModel.countDocuments()    

    
    if(userCount>0){
      res.send("seed is already done")
      return
    }
    await UserModel.create(sample_users)
    res.send("Seed is done")
  }
))
////////////////////////////////////////////////////////////////////////////////////////////
router.post('/register', asyncHandler(
  async(req,res)=>{
    const {name, email, password, address} = req.body;
    const userExist= await UserModel.findOne({email})
    
    if(userExist){
      res.status(HTTP_BAD_REQUEST).send("user is already registered")
      return
    }else{
      
      const passwordHash = await bcrypt.hash(password, 10)
     const newUser:User = {
        name,
        email: email.toLowerCase(),
        password: passwordHash,
        address,
        isAdmin:false
      }
      const dbUser = await UserModel.create(newUser)
      res.send(generateTokenResponse(dbUser));
      
    }
  }
))


/////////////////////////////////////////////////////////////////////////////////////////////

router.post("/login", asyncHandler(
  async(req,res)=>{
    const {email, password} = req.body
    const user = await UserModel.findOne({email:email})
    
    if(user && (await bcrypt.compare(password,user.password))){
      res.send(generateTokenResponse(user))
    }else{ 
      res.status(400).send("user name or password invalid") 
    }
  })
)


  
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
      id:user.id,
      email: user.email, isAdmin:user.isAdmin 
    },process.env.JWT_SECRET!,{
      expiresIn:"30d"
    })

    const userWithToken = {
      ...user.toObject(), // Convert the Mongoose document to a plain JavaScript object
      token: token,
  };
    // user.token = token
    return userWithToken
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  export default router