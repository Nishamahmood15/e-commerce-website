import express from "express";
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 6000;

connectDB(); //connect to mongoDb

const app = express(); 
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products',productRoutes); 
app.use('/api/users',userRoutes); 
app.use(notFound);
app.use(errorHandler); 

app.listen(port, () => console.log(`Server is running on Port ${port}`));
