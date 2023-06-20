// Imports
import React, { lazy, useState, Suspense, useEffect } from 'react';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";

// import ITCard from './ITCard';

const ITCard = lazy(() => import('./ITCard'));

export default function ItSkillContainer() {


    // const [allTechs,setAllTechs] = useState([])
    const [allTechs,setAllTechs] = useState(
        [
            {
                id: 1,
                technologies: "Core Java",
                version: "11",
                score: "7"
            },
            {
                id: 2,
                technologies: "MySQL",
                version: "8.0 C.E.",
                score: "6"
            },
            {
                id: 3,
                technologies: "HTML",
                version: "5",
                score: "7"
            }
        ]
    )

    async function fetchAllTechnologies () {
        const {data} = await axios.get("http://localhost:8080/itskill/fetchList/getcand/1");
        console.log(data);
        setAllTechs(data);
    }

    useEffect(() =>{
        // fetchAllTechnologies ()
    },[])

    return(
        <div>
            <h1>
                IT Skill Container
            </h1>
            <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
                {allTechs && allTechs.map((skill) =>
                    <ITCard key={skill.id} skill ={skill} />
                )}
            </Suspense>
        </div>
    )
}