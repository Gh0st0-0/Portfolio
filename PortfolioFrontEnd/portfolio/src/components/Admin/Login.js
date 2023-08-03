import axios from 'axios';
import React from 'react';
import {  useState } from 'react';
import {useNavigate} from "react-router-dom";
import whoareyou from "../../Assets/Images/LoginPage/whoareyou.jpg";
import failed from "../../Assets/Images/LoginPage/failed.jpg";
import authentication from "../../Assets/Images/LoginPage/authentication-failed.jpg"
// import CandidateContext from '../CandidateContext';

export default function Login() {
    // const {candidate, setCandidate} = useContext(CandidateContext);
    // const [candidate, setCandidate] = useState({});
    const [loginCreds, setLoginCreds] = useState({
        userName: "",
        password: ""
    })
    const [failure] = useState({
        userName: "",
        password: ""
    })
    const [message, setMessage] = useState({
        failuremessage: "Message Check"
    })
    const [failureImages] = useState({
        images: [
            {
                src: authentication,
                alt: "You Shall Not Pass"
            },
            {
                src: failed, // "../../Assets/Images/LoginPage/failed.jpg",
                alt: "Failure You Are"
            },
            {
                src: whoareyou, //"../../Assets/Images/LoginPage/whoareyou.jpg",
                alt: "Who Are You"
            }
        ]
    })
    const navigate = useNavigate()

    async function validate_login(){
        const {data} = await axios.post("http://localhost:8080/candidate/login",loginCreds);
        if(data != null)
            navigate("/cand_admin");
        else
            reset();
    }

    const reset = () => {
        setMessage("Invalid Credentials")
        setLoginCreds(failure)
    }

    function RandomNumberGenerator() {
        // Generate a random number from 0 to 2
        const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
        return randomNumber;
    }

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setLoginCreds({...loginCreds, [name]: value})
    }

    return(
        <div className={'login row'}>
            <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div  className={"loginBlock col-4 offset-md-3"}>
                        <div className="row mb-3">
                            <label htmlFor="userName" className="col-sm-4 col-form-label">User Name</label>
                            <div className="col-sm-12">
                                <input type="text" className={'form-control'} id={'userName'} name={'userName'} value={loginCreds.userName} onChange={HandleChanges} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="password" name={'password'} value={loginCreds.password} onChange={HandleChanges} />
                            </div>
                        </div>
                        <button className={'custom-button'} onClick={validate_login} >Login</button>
                    </div>
                </div>
                {message.failuremessage && <div style={{color: 'black', margin: '100px', opacity:'60%'}}>
                    <h1>{message.failuremessage}</h1>
                    <img src={failureImages.images[RandomNumberGenerator()].src} loading='lazy' alt={failureImages.images[RandomNumberGenerator()].alt} />
                </div>}
            </div>
        </div>
    )
}