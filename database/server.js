import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"; 

dotenv.config()

const app = express(); 
app.use(morgan());
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
};
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err))

const PORT = process.env.BACKEND_PORT || 3001 
app.listen(PORT, () => console.log(`Backend running on port: ${PORT}`));