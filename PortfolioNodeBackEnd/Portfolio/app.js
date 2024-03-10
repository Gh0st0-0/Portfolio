// HomeDirectory path: E:\ADVJAVA3\Portfolio\PortfolioNodeBackEnd

// Imports
import express from "express";
import mongoose from "mongoose";
import router from "./routes/contact-routes.js"
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

// Declare fumctions to be used
const app = express();
const port = 5000;
const mongoKey = process.env.MONGO_DB_CONNECTION
const origen_call = process.env.ORIGIN_CALL

// Inform the app about the type of the data fetched
app.use(express.json()); // all the data will be parsed as json 

app.use(cors({
    origin: origen_call,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable cookies and HTTP authentication headers
}));

// Call the router
app.use("/node/contact",router);

// Connecting the database
mongoose
    .connect(
        mongoKey
    ) // link modified to connect the database to Node, user :agwl
    .then(()=>{
        app.listen(port, () => {
            console.log("Listning on port " + port);
        });
    })
    .catch((error) => {
        console.log(error);
    })
