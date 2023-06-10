import express, { json } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/User.js";
const router = express.Router();
const secret = "hackelyisbeingdeveloped";

router.post("/studentRegister", async (req, res) => {
    try {
        const { firstname, lastname, dob, phoneno, email, password } = req.body.payload;
        let success = false;
        if (!firstname && !lastname && !phoneno && !email && !password) {
            return res.json(404).json({ message: "Enter the credentials" });
        }
        let user = await userModel.findOne({ email: email });
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user = await userModel.create({
                firstname: firstname,
                lastname: lastname,
                phoneno: phoneno,
                email: email,
                dob: dob,
                password: hashedPassword,
            })

            if (user) {
                const data = {
                    user: {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        phoneno: user.phoneno,
                        email: user.email,
                        role: user.role,
                    }
                }

                success = true;

                const authToken = jwt.sign(data, secret);
                return res.status(200).json({ success, authToken })
            } else {
                return res.status(404).json({ message: "Internal Error" })
            }
        } else {
            return res.json(404).json({ message: "User already exists" });
        }
    } catch (error) {
        console.error(error);
        // return res.status(404).json({ message: "Error" });
    }
})
const generateAccessToken = (user) => {
    return jwt.sign({ user: user, isAdmin: 'admin' }, "mySecretKey", {
        expiresIn: "240s",
    });
};
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body.payload;
        const user = await userModel.findOne({ email: email })
        let passwordMatch = false
        passwordMatch = await bcrypt.compare(password, user._doc.password);
        if (passwordMatch) {
            const accessToken = generateAccessToken(user)
            // localStorage.setItem('accessToken', accessToken)
            return res
                .cookie("access_token", accessToken, {
                    // httpOnly: true,
                    expire: '240s' + Date.now()
                }).status(200).json({user: user, accessToken: accessToken, message: 'logged in succesfully' });


        }
        else {
            
            res.status(400).send({
                status: 403,
                msg: "Email or Password Incorrect",
            });
        }
    } catch (e) {
        console.log(e)
    }
})
router.post("/companyRegister", async (req, res) => {
    try {
        const { firstname, lastname, phoneno, email, password, companyname } = req.body;
        let success = false;
        if (!firstname && !lastname && !phoneno && !email && !password && !companyname) {
            return res.json(404).json({ message: "Enter the credentials" });
        }

        let user = await userModel.findOne({ email: email });

        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            user = await userModel.create({
                firstname: firstname,
                lastname: lastname,
                phoneno: phoneno,
                email: email,
                password: hashedPassword,
                companyname: companyname,
                role: "company"
            })

            if (user) {
                const data = {
                    user: {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        phoneno: user.phoneno,
                        email: user.email,
                        companyname: user.companyname,
                    }
                }

                success = true;

                const authToken = jwt.sign(data, secret);
                return res.status(200).json({ success, authToken })
            } else {
                return res.status(404).json({ message: "User already exists" });
            }
        } else {
            return res.status(404).json({ message: "User not exists" });
        }
    } catch (error) {
        console.error(error);
        return res.status(404).json({ message: "Error" });
    }
})

// router.post('/login')
router.get("/getUser", async (req,res)=>{
    try{
        let user = await userModel.findOne({ _id: req.body.id });
        return res.status(200).json({ user: user._doc });
    }catch(e){
        return res.status(404).json({ error: e });
    }
})
export default router;