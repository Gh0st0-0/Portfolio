import axios from 'axios';
import React, { lazy, useState, Suspense, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const ExperienceCard = lazy(() => import('./ExperienceCard'));

export default function ExperienceContainer() {

    const [experience, setExperience] = useState([]);

    async function fetchAllExperience(){
        const {data} = await axios.get('http://localhost:8080/experience/fetchList/getCand/1');
        const sortedExperience = data.sort((a,b) => b.id -a.id); // sorted data in decending order before saving.
        setExperience(sortedExperience);
        //console.log(sortedExperience)
    }

    useEffect(
        () => {
            fetchAllExperience();
        }
    ,[]);

    return (
        <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
            <div className={'ExperienceContainer'}>
                <h1>Current</h1>
                {experience && experience.map((exp) => 
                    <>
                        <i key={exp.id+100} className='bx bx-chevrons-up bx-lg'></i>
                        <ExperienceCard key={exp.id} exper={exp} />
                    </>
                )}
            </div>
        </Suspense>
    )
}