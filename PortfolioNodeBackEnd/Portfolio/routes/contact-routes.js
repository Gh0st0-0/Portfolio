// importing the express to manage the request response from the frontend
import express from "express";
import { FindBySubject, ContactMe, getAllMails } from "../controller/contact-controller.js";


// using the Router function from the express.js
const router = express.Router();
// this gives us the access of the router functions like get, post, put, delete

router.get("/AllMails", getAllMails); // get all the mails
router.post("/Contact", ContactMe); // send me mail
router.get("/fetchMail", FindBySubject); // select a mail by subject

// Export the default router to the app.js
export default router;