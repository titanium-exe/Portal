import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});


const app = express();

// middleware 
app.use(express.json());
app.use(express.urlencoded({exteded: true}));

app.use(cookieParser());
const corsOptions = {
  origin: 'https://localhost:5173',
  credentials:true,
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  connectDB();
  console.log(`server running at port ${PORT}`);
});

