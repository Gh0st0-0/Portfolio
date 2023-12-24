import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import {toast} from 'react-toastify';

export default function AddExperience(){
    const navigate = useNavigate();

    const [experience, setExperience] = useState(
        {
            companyName: "Techture",
            companyLogo: "https://ik.imagekit.io/vrchd4vczr/CompanyLogos/techture.jfif?updatedAt=1700908305341",
            companyLocation: "Indore M.P.",
            dateFrom: "2020-01-30",
            dateTo: "2021-04-02",
            companyDesignation: "BIM Intern",
            timeServed: 15
        }
    );

    const HandleChanges = (event) => {
        let {name, value} = event.target;
        setExperience({...experience, [name]: value})
    }

    async function persistExperience() {
        try{
            const {data} = await axios.post("http://localhost:8080/experience/persist/saveExperience", experience)
            if(data){
                notify();
            }else{
                failure();
            }
        }catch(error) {
            throw error;
        }
    }

    const notify = () =>{
        toast.success('It-Skill Added Successfully.', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
        );
    }

    const failure = () => {
        toast.error('Failed to add Academics. Try Again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }
        );
    }

    return (
        <div className={'Admin-Add-Exper'}>
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Add Experience Record
            </h2>
            <div className={'Admin-Add-Exper-form col-md-4'}>
                <div className={'row'}>
                    <div></div>
                </div>
            </div>
        </div>
    )

}