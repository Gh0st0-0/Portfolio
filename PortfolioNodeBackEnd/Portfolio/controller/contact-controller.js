import Contact from "../models/Contact.js";

// exported a method to fetch the list of all the mails of people trying to contact me
export const getAllMails = async (request, response, next) => {
    let contacts;
    // database operations could fail so we encose it in a try catch block
    try{
        contacts = await Contact.find(); // asynchronous function uses await
    }catch(error){
        console.log(error);
    }
    // Perform validations 
    if(!contacts){
        return response.status(404).json({message:"No mails found"});
    }
    return response.status(200).json({contacts});
}

// exporting the method to allow trhe people to contact me
export const ContactMe = async (request, response, next) => {
    // destructure all the fields we get from the request.body
    const { email, subject, message } = request.body;
    let contact = new Contact({
        email,
        subject,
        message
    });
    // the mail is transient

    // persisting the contact
    try{
        await contact.save();
    }catch(error){
        console.error(error);
        return null;
    }
    return response.status(201).json({message: "Thank you for your message. I acknowledge receipt and appreciate your prompt response. Please be advised that I will provide a reply within the next 24 hours. Your patience is greatly appreciated."})
}

// method to fetch the mail by subject
export const FindBySubject = async (request, response, next) => {
    // Destructure the object we get from the front end in the request.body
    const {email, subject, message} = request.body;
    // we will find the existing mail and return the mail with the entire object 
    let existingMail;
    // Enclosing the database communication within the try catch block and log the error
    try{
        existingMail = await Contact.findOne({subject});
    } catch(error){
        console.log(error);
    }
    if(existingMail){
        return response.status(200).json({existingMail})
    }
    return response.status(400);
}