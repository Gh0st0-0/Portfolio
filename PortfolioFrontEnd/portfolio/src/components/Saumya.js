import React, { Suspense  } from 'react';
import { useContext, useEffect, useState } from 'react';
import CandidateContext from '../components/CandidateContext';
import saumya from '../Assets/Images/saumya.jpg';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";
import {Link} from "react-router-dom";


// const Login = lazy(() => import('./Admin/Login'));

export default function Saumya(){

    // const [candidate, setCandidate] = useState(
    //     {
    //         id: 1,
    //         userName: "Gh0st",
    //         password: "Saumya@123546",
    //         firstName: "Saumya",
    //         middleName: "*",
    //         lastName: "Garg",
    //         currentWorkingLocation: "Pune Maharashtra",
    //         roll: "Full-Stack-Developer"
    //     }
    // )
    
    // {
    //     id: 1,
    //     primaryNo: "+91-9993522409",
    //     secondryNo: "+91-9425410221",
    //     email: "saumyagwl98@gmail.com",
    //     linkedin: "https://www.linkedin.com/in/saumya-garg-693534173/",
    //     hackerRank: "https://www.hackerrank.com/saumyagwl98?hr_r=1"
    // }
                
    const {candidate, setCandidate} = useContext(CandidateContext);
    const [credentials, setCredentials] = useState({});
    


    async function fetchCandidate() {
        const {data} = await axios.get("http://localhost:8080/candidate/getcandidate/1");
        // console.log(data);
        setCandidate(data);
    }

    async function fetchCredentials(){
        const {data} = await axios.get("http://localhost:8080/credentials/getcreds/1");
        // console.log(data);
        setCredentials(data);
    }

    useEffect(
        () => {
            fetchCandidate();
            fetchCredentials();
        }
    ,[]);

    return (
        <div className={'SaumyaContainer'}>
            <Suspense fallback={<CircleLoader className={'App-Loader'} color="#11c713"/>}>
                <div>
                    <Link to={'/login'}>
                        <img src={saumya} alt="Saumya Garg" loading={'lazy'} className={'saumyaImage'}/>
                    </Link>
                </div>
            </Suspense>
            <div className={'CandidateContainer'}>
                <h2>{candidate.firstName} {candidate.lastName}</h2>
                <h3>Current Working Location: {candidate.currentWorkingLocation}</h3>
                <h3>As a: {candidate.roll}</h3>
                <div>
                    <p>
                        Highly motivated and enthusiastic Full Stack Developer seeking an
                        opportunity to apply my skills and knowledge in a professional setting.
                        With a strong foundation in web development, I am eager to contribute
                        to the success of a dynamic organization while continuously learning
                        and growing as a developer.
                    </p>
                </div>
            </div>
            <div className={'CredentialContainer'}>
                <div>
                    Contact-No: 
                    <p>
                        {credentials.primaryNo}, 
                        {credentials.secondryNo}
                    </p>
                </div>
                <a href='/#'>
                    <i className='bx bxl-gmail bx-flashing' ></i> {credentials.email}
                </a>
                
                <a href={credentials.linkedin} target={'#'}>
                    <i className='bx bxl-linkedin bx-flashing' ></i> Linkedin
                </a>

                <a href={credentials.hackerRank} target={'#'}>
                    <i className='bx bx-code bx-flashing' ></i> HackerRank
                </a>
            </div>
        </div>
    )
}
