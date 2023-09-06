// HomeDirectory path: E:\ADVJAVA3\Portfolio\PortfolioNodeBackEnd

// Imports
import express from "express";
import mongoose from "mongoose";
import router from "./routes/contact-routes.js"
import cors from "cors";

// Declare fumctions to be used
const app = express();
const port = 5000;

// Inform the app about the type of the data fetched
app.use(express.json()); // all the data will be parsed as json 

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable cookies and HTTP authentication headers
}));

// Call the router
app.use("/node/contact",router);

// Connecting the database
mongoose
    .connect(
        'mongodb+srv://admin:LmJYK4ub8gmL4vEd@portfoliogarg.zgaokrp.mongodb.net/'
    ) // link modified to connect the database to Node 
    .then(()=>{
        app.listen(port, () => {
            console.log("Listning on port " + port);
        });
    })
    .catch((error) => {
        console.log(error);
    })
