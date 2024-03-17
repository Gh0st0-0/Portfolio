import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditExperience() {
    const { id } = useParams();
    const navigate = useNavigate();

    // const [experience, setExperience] = useState({});
    const [experience, setExperience] = useState(
        {
            id: 1,
            companyName: "Techture",
            companyLogo: "https://ik.imagekit.io/vrchd4vczr/CompanyLogos/techture.jfif?updatedAt=1700908305341",
            companyLocation: "Indore M.P.",
            dateFrom: "2020-01-30",
            dateTo: "2021-04-02",
            companyDesignation: "BIM Intern.",
            timeServed: 15
        }
    );

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

    useEffect(() => {
        //fetchExperienceByID();
    }, []);

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
        <div className={'Admin-Edit-Experience'}>
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>Edit Experience</h2>
            
        </div>
    );
}