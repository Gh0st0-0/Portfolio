import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function AddOtherSkills(){
    const navigate = useNavigate();

    const [otherSkill, setOtherSkill] = useState(
        {
            technologies: "",
            version: "",
            score: "",
            iconsClass: ""
        }
    )

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setOtherSkill({...otherSkill, [name]: value})
    }

    async function persistOtherSkill() {
        const {data} = await axios.post();
    }

    return (
        <h2>
            Add Other Skills
        </h2>
    )
}