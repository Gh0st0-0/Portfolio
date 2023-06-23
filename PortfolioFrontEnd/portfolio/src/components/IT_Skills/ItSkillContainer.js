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
        		"id": 1,
        		"technologies": "Core Java",
        		"version": "11",
        		"score": "7",
        		"iconsClass": "bx bxl-java bx-border bx-lg",
                "category": "Language"
    		},
    		{
        		"id": 2,
        		"technologies": "MySQL",
        		"version": "8.0 C.E.",
        		"score": "6",
        		"iconsClass": "bx bxs-data bx-border bx-lg",
                "category": "DataBase"
    		},
    		{
        		"id": 3,
        		"technologies": "HTML",
        		"version": "5",
        		"score": "7",
        		"iconsClass": "bx bxl-html5 bx-border bx-lg",
                "category": "WebTechnology"
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
    },[]);

    return(
        <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
            <div className={'IT-daddy'}>
                <div>
                    <h2>
                        Language
                    </h2>
                    <div className="IT-container">
                        {allTechs && allTechs.map((skill) =>
                            skill.category === "Language" && <ITCard key={skill.id} skill ={skill} />
                        )}
                    </div>
                </div>
                <div>
                    <h2>
                        Web-Development
                    </h2>
                    <div className="IT-container">
                        {allTechs && allTechs.map((skill) =>
                            skill.category === "WebTechnology" && <ITCard key={skill.id} skill ={skill} />
                        )}
                    </div>
                </div>
                <div>
                    <h2>
                        Data-Base
                    </h2>
                    <div className="IT-container">
                        {allTechs && allTechs.map((skill) =>
                            skill.category === "DataBase" && <ITCard key={skill.id} skill ={skill} />
                        )}
                    </div>
                </div>
            </div>

        </Suspense>
        
    )
}