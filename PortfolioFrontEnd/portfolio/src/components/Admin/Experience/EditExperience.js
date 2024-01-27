import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditExperience() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [experience, setExperience] = useState({});

    async function fetchExperienceByID(){
        try{
            id = 1; // to be changed
            //const {data} = await axios.post{`http://localhost:8080/experience/getExperience/${id}`}
            const {data} = await axios.post(`http://localhost:8080/experience/getExperience/${id}`);
            setExperience(data);
        }
        catch(error){
            throw new Error(error);
        }
    };

    async function editExperience(){
        try{
            const { data } = await axios.post(`http://localhost:8080/experience/persist/update7`, experience);
            setExperience(data);
        }catch(error){
            throw new Error(error);
        }
    };

    const handleChanges = (event) => {
        let {name, value} = event.target;
        setExperience({...experience, [name]: value});
    };

    return (
        <>
            <h1>Edit Experience</h1>
        </>
    );
}