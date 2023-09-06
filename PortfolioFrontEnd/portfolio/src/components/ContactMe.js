// Imports
import React from 'react'
import {toast} from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';


export default function ContactMe() {

    const [contactState, setContactStatus] = useState({
        email: "",
        subject: "",
        message: ""
    });
    const [contactEmpty] = useState({
            email: "",
            subject: "",
            message: ""
        });

    const [message, setMessage] = useState({});

    const HandleChanges = (events) => {
        let {name, value} = events.target;
        setContactStatus({...contactState, [name]: value});
    }

    const notify = () =>{
        toast.success('Mail Sent Successfully, Thank you', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
        );
    }

    const failure = () => {
        toast.error('Failed to send mail. Try Again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
        );
    }

    async function sendMessage() {
        const { data } = await axios.post("http://localhost:5000/node/contact/Contact",contactState);
        if(data != null) {
            setMessage(data);
            setContactStatus(contactEmpty);
            notify();
        }else{
            failure();
        }
    }

    return (
        <div className={'contactContainer'}>
            <div>
                <h2>Contact Me</h2>
            </div>
            {message.message && <div className={'message'}>
                <h5>
                    {message.message}
                </h5>
            </div>}
            <div className="form-floating mb-3">
                <input type="email" className="form-control" name={'email'} id={'email'} placeholder="name@example.com" onChange={HandleChanges} value={contactState.email} />
                <label htmlFor={'email'}>Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name={'subject'} id={'subject'} placeholder="Subject" onChange={HandleChanges} value={contactState.subject} />
                <label htmlFor={'subject'}>Subject</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" name={'message'} placeholder="Leave a comment here" id={'message'} onChange={HandleChanges} value={contactState.message} ></textarea>
                <label htmlFor={'message'}>Message</label>
            </div>
            <div className="buttonHolder">
                <button className={'btn btn-primary'} onClick = {() => sendMessage()}>Send</button>
            </div>
        </div>
    )
}