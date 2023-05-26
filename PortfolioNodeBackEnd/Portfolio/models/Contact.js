// imports
import mongoose from "mongoose";

// Declaring the constant
const Schema = mongoose.Schema; // Fetching the schema of the mongoose
// with this we get the omdel of ther schema with the contact collection

// Declaring the object of the schema and edit the object and edit the fields
const contactSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        unique: true,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

// Exporting the model/object of the contact
export default mongoose.model("Contact", contactSchema);
// The object is eported to the mongo and the schema is stored as contacts
