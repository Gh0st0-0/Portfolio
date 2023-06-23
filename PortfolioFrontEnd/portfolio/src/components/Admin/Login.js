import axios from 'axios';
import React from 'react';
import { useContext, useEffect, useState } from 'react';

export default function Login() {
    // const {candidate, setCandidate} = useContext(CandidateContext);
    const {candidate, setCandidate} = useState({});
    const {loginCreds, setLoginCreds} = useState({
        userName: "",
        password: ""
    })

    async function validate_login(){
        const {data} = await axios.post("http://localhost:8080/candidate/login",loginCreds);
        setCandidate(data);
    }

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setLoginCreds({...loginCreds, [name]: value})
    }

    return(
        <div className={'login row'}>
            <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div  className={"loginBlock col-4"}>
                    <div className="row mb-3">
                        <label htmlFor="userName" className="col-sm-2 col-form-label">User Name</label>
                        <div className="col-sm-12">
                            <input type="text" className={'form-control'} id={'userName'} name={'userName'} value={loginCreds.userName} onChange={HandleChanges} />
                        </div>
                    </div>
                        {/* <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="inputEmail3" name={'userName'} value={loginCreds.userName} onChange = {HandleChanges} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3" name={'password'} value={loginCreds.password} onChange={HandleChanges} />
                            </div>
                        </div> */}
                        <button className={'btn btn-primary'} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}