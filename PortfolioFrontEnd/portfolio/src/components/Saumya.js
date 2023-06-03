import React from 'react';
import { useContext } from 'react';
import CandidateContext from '../components/CandidateContext';

export default function Saumya(){

    const {candidate, setCandidate} = useContext(CandidateContext);

    return (
        <div>
            <h2>Saumya</h2>
        </div>
    )
}
