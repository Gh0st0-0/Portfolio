// HomeDirectory path: E:\ADVJAVA3\Portfolio\PortfolioNodeBackEnd

// Imports
import express from "express";
import mongoose from "mongoose";
import router from "./routes/contact-routes.js"

// Declare fumctions to be used
const app = express();
const port = 5000;

// Inform the app about the type of the data fetched
app.use(express.json()); // allk the data will be parsed as json 

// Call the router
app.use("/node/contact",router);

// Connecting the database
mongoose
    .connect('mongodb+srv://admin:LmJYK4ub8gmL4vEd@portfoliogarg.zgaokrp.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        app.listen(port, () => {
            console.log("Listning on port " + port);
        });
    })
    .catch((error) => {
        console.log(error);
    })
// // Call on port
// app.listen(port, () => {

// })