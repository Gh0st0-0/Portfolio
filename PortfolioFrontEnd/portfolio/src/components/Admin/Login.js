import axios from 'axios';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

export default function Login() {
    // const {candidate, setCandidate} = useContext(CandidateContext);
    const [candidate, setCandidate] = useState({});
    const [loginCreds, setLoginCreds] = useState({
        userName: "",
        password: ""
    })
    const navigate = useNavigate()

    async function validate_login(){
        const {data} = await axios.post("http://localhost:8080/candidate/login",loginCreds);
        navigate("/cand_admin");
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
                        <button className={'custom-button'} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}