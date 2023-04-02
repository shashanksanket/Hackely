import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

mongoose.connect("mongodb+srv://navi:navi@cluster0.segpgcr.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Mongodb is connect successfully");
}).catch(() => {
    console.log("Mongodb is not connected successfully");
})

//Routes

app.use("/api/auth", authRoutes);

app.listen(4000, () => {
    console.log("Server started");
})

