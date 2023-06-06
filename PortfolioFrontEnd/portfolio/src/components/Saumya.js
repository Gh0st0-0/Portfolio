import React from 'react';
import { useContext, useEffect } from 'react';
import CandidateContext from '../components/CandidateContext';
import saumya from '../Assets/Images/saumya.jpg';
import axios from 'axios';

export default function Saumya(){

    const {candidate, setCandidate} = useContext(CandidateContext);

    async function fetchCandidate() {
        const {data} = await axios.get("http://localhost:8080/candidate/getcandidate/1");
        consol.log(data);
        setCandidate(data);
    }

    useEffect(
        () => {
            fetchCandidate();
        }
        ,[]);

    return (
        <div className={'SaumyaContainer'}>
            <div>
                <img src={saumya} alt="Saumya Garg" className={'saumyaImage'}/>
            </div>
            <div>
                <h2>Saumya</h2>
            </div>
        </div>
    )
}
