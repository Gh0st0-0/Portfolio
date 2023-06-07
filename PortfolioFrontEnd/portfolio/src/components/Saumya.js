import React from 'react';
import { useContext, useEffect, useState } from 'react';
import CandidateContext from '../components/CandidateContext';
import saumya from '../Assets/Images/saumya.jpg';
import axios from 'axios';

export default function Saumya(){

    // const {candidate, setCandidate} = useContext(CandidateContext);
    const {candidate, setCandidate} = useState(
        {
            id: 1,
            userName: "Gh0st",
            password: "Saumya@123546",
            firstName: "Saumya",
            middleName: "*",
            lastName: "Garg",
            currentWorkingLocation: "Pune Maharashtra",
            roll: "Full-Stack-Developer"
        }
    )

    async function fetchCandidate() {
        const {data} = await axios.get("http://localhost:8080/candidate/getcandidate/1");
        console.log(data);
        setCandidate(data);
    }

    // useEffect(
    //     () => {
    //         fetchCandidate();
    //     }
    //     ,[]);

    return (
        <div className={'SaumyaContainer'}>
            <div>
                <img src={saumya} alt="Saumya Garg" className={'saumyaImage'}/>
            </div>
            <div>
                <h2>Saumya Garg</h2>
                {/* <h2>{candidate.firstName} {candidate.lastName}</h2> */}
            </div>
        </div>
    )
}
