import axios from 'axios';
import React, { lazy, useState, Suspense, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const ExperienceCard = lazy(() => import('./ExperienceCard'));

export default function ExperienceContainer() {

    const [experience, setExperience] = useState([]);

    async function fetchAllExperience(){
        const {data} = await axios.get('http:localhost:8080/experience/fetchList/getCand/1');
        setExperience(data);
    }

    // Add function to apply sorting in decending order as biggest id is with the latest job

    useEffect(
        () => {
            fetchAllExperience();
        }
    ,[]);

    return (
        <div>
            <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
                {experience && experience.map((exp) => {
                    <ExperienceCard key={experience.id} exper={exp} />
                })}
            </Suspense>
        </div>
    )
}