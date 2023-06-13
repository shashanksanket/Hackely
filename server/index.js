import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyHackthonOrganizer.js";
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
app.use(cors({
    origin: 'http://65.0.87.90/'
  }));
app.use("/api/auth", authRoutes);
app.use("/api/hackathons", companyRoutes);

app.listen(4000, () => {
    console.log("Server started");
})

