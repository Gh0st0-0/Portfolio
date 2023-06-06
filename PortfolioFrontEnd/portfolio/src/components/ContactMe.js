// Imports
import React from 'react'
import {toast} from 'react-toastify';
import { useState, useEffect } from 'react';


export default function ContactMe(props) {

    const [contactState, setContactStatus] = useState(
                                            {
                                                email: "",
                                                subject: "",
                                                message: ""
                                            });

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

    return (
        <div className={'contactContainer'}>
            <div>
                <h2>Contact Me</h2>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" name="Email" id="floatingInput" placeholder="name@example.com" onChange={HandleChanges} />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="Subject" id="floatingInput" placeholder="Subject" onChange={HandleChanges} />
                <label htmlFor="floatingInput">Subject</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" name={'Message'} placeholder="Leave a comment here" id="floatingTextarea2" onChange={HandleChanges} ></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
            </div>
            <div className="buttonHolder">
                <button className={'btn btn-primary'} onClick = {notify}>Send</button>
            </div>
        </div>
    )
}