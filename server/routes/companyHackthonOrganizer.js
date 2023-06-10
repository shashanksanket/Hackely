import companyHackthonModel from "../models/companyHackthon.js";
// import multer from "multer";
import path from "path";
import router from "./authRoutes.js";
// import fetchUser from "../models/fetchUser.js";

// router.post("/companyHackathonOrganizing", fetchUser,async(req,res)=>{
//     try{
//         const {hackthonname, htdesc, htregisstartdate, htregisenddate, htstartdate, prizes, problemStatement} = req.body;
//         if(!hackthonname && !htdesc && !htregisstartdate && !htregisenddate && !htstartdate && !prizes && !problemStatement){
//             return res.status(404).json({message : "Fill the required info correctly!"});        
//         }

//         const hackathonData = await companyHackthonModel.create({
//             hackthonname,
//             htdesc,
//             htregisstartdate,
//             htregisenddate,
//             htstartdate,
//             prizes,
//             problemStatement
//         })

//         res.json(hackathonData);
//     }catch{
//         return res.status(404).json({message : "An error Occurred"});        
//     }
// })

export default router;
