// Imports
import React, { lazy, useState, Suspense, useEffect } from 'react'
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";

const OtherCard = lazy(() => import('./OtherCard'));

export default function OtherSkillContainer(){

    const [allOtherSkills, setAllOtherSkills] = useState();
    

    async function fetchAllOtherSkills(){
        const {data} = await axios.get("http://localhost:8080/otherskill/fetchList/getcand/1");
        // console.log(data);
        setAllOtherSkills(data);
    }

    useEffect(() => {
        fetchAllOtherSkills();
    }, []);
        
    
    return(
        <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
            <div className={'Other-Container'}>
                {allOtherSkills && allOtherSkills.map((skill) =>
                    <OtherCard key={skill.id} skill={skill} />
                )}
            </div>
        </Suspense>

    )
}

    // const [allOtherSkills, setAllOtherSkills] = useState(
    //     [
    //         {
    //             id: 1,
    //             technologies: "PTC Creo",
    //             version: "8",
    //             score: "7",
    //             iconsClass: "bx bx-edit-alt bx-border bx-lg"
    //         },
    //         {
    //             id: 2,
    //             technologies: "AutoDesk Revit",
    //             version: "v2020",
    //             score: "7",
    //             iconsClass: "bx bx-building-house bx-border bx-lg"
    //         },
    //         {
    //             id: 3,
    //             technologies: "Ansys Fluent",
    //             version: "2021 R2",
    //             score: "6",
    //             iconsClass: "bx bx-wind bx-border bx-lg"
    //         },
    //         {
    //             id: 4,
    //             technologies: "Video Editing",
    //             version: "WonderShare Filmora ",
    //             score: "7",
    //             iconsClass: "bx bx-video-plus bx-border bx-lg"
    //         }
    // ]);