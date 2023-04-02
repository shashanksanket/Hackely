import express, { json } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/User.js";
const router = express.Router();
const secret = "hackelyisbeingdeveloped";

router.post("/studentRegister", async(req,res)=>{
    try{
        const {firstname,lastname,phoneno,email,password} = req.body;
        let success = false;
        if(!firstname && !lastname && !phoneno && !email && !password){
            return res.json(404).json({message : "Enter the credentials"});
        }
        
        let user = await userModel.findOne({email : email});
        if(!user){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);
            user = await userModel.create({
                firstname : firstname,
                lastname : lastname,
                phoneno : phoneno,
                email : email,
                password : hashedPassword,
            })

            if(user){
                const data = {
                    user : {
                        id : user.id,
                        firstname : user.firstname,
                        lastname : user.lastname,
                        phoneno : user.phoneno,
                        email : user.email
                    }
                }

                success = true;

                const authToken = jwt.sign(data,secret);
                return res.status(200).json({success,authToken})
            }else{
                return res.status(404).json({message : "Internal Error"})
            }
        }else{
            return res.json(404).json({message : "User already exists"});
        }
    }catch(error){
        console.error(error);
        return res.status(404).json({message : "Error"});
    }
})

router.post("/companyRegister", async(req,res) => {
    try{
        const {firstname, lastname, phoneno, email, password, companyname} = req.body;
        let success = false;
        if(!firstname && !lastname && !phoneno && !email && !password && !companyname){
            return res.json(404).json({message : "Enter the credentials"});
        }

        let user = await userModel.findOne({email : email});

        if(!user){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);

            user = await userModel.create({
                firstname : firstname,
                lastname : lastname,
                phoneno : phoneno,
                email : email,
                password : hashedPassword,
                companyname : companyname,
                role : "company"
            })

            if(user){
                const data = {
                    user : {
                        id : user.id,
                        firstname : user.firstname,
                        lastname : user.lastname,
                        phoneno : user.phoneno,
                        email : user.email,
                        companyname : user.companyname,
                    }
                }

                success = true;

                const authToken = jwt.sign(data,secret);
                return res.status(200).json({success,authToken})
            }else{
                return res.status(404).json({message : "User already exists"});
            }
        }else{
            return res.status(404).json({message : "User not exists"});
        } 
    }catch(error){
        console.error(error);
        return res.status(404).json({message : "Error"});
    }
})

export default router;