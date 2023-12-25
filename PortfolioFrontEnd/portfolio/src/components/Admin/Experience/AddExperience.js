import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import {toast} from 'react-toastify';

export default function AddExperience(){
    const navigate = useNavigate();

    const [experience, setExperience] = useState(
        {
            companyName: "",
            companyLogo: "",
            companyLocation: "",
            dateFrom: "",
            dateTo: "",
            companyDesignation: "",
            timeServed: 0
        }
    );

    const HandleChanges = (event) => {
        let {name, value} = event.target;
        setExperience({...experience, [name]: value})
    }

    const calculateTime = useCallback(() => {
        console.log(experience.dateTo);
    
        const startDate = new Date(experience.dateFrom);
        const endDate = new Date(experience.dateTo);

        const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();

        setExperience(prevExperience => ({
            ...prevExperience,
            timeServed: months
        }));
    
    }, [experience.dateFrom, experience.dateTo]);

    useEffect(() => {
        calculateTime();
    }, [calculateTime]);

    async function persistExperience() {
        try{
            if(experience.dateTo === "" || experience.dateTo === null) {
                setExperience(prevExperience => ({
                    ...prevExperience,
                    dateTo: null
                }));
            }
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
            <div className={'Admin-Add-Exper-form col-md-6'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'companyName'}>Company Name</label>
                        <input type={'text'} className={'form-control'} name={'companyName'} id={'companyName'} value={experience.companyName} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-3'}>
                        <label htmlFor={'companyLocation'}>Company Location</label>
                        <input type={'text'} className={'form-control'} name={'companyLocation'} id={'companyLocation'} value={experience.companyLocation} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-3'}>
                        <label htmlFor={'companyDesignation'}>Company Designation</label>
                        <input type={'text'} className={'form-control'} name={'companyDesignation'} id={'companyDesignation'} value={experience.companyDesignation} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'dateFrom'}>Date From</label>
                        <input type={'date'} className={'form-control'} name={'dateFrom'} id={'dateFrom'} value={experience.dateFrom} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'dateTo'}>Date To</label>
                        <input type={'date'} className={'form-control'} name={'dateTo'} id={'dateTo'} value={experience.dateTo} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'timeServed'}>Time Served</label>
                        <input type={'number'} className={'form-control'} name={'timeServed'} id={'timeServed'} value={experience.timeServed} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group'}>
                        <lable htmlFor={'companyLogo'} >Company Logo Link</lable>
                        <input type={'text'} className={'form-control'} name={'companyLogo'} id={'companyLogo'} value={experience.companyLogo} onChange={HandleChanges} />
                    </div>
                </div>
                {experience.companyLogo !== "" && <div className={'Form-Image'}>
                    <img loading={'lazy'} src={experience.companyLogo} alt={experience.companyName + "Logo"} />
                </div>}
                <button className={'custom-button'} onClick={persistExperience}>Add Experience</button>
            </div>
        </div>
    )

}
// {
        //     companyName: "Techture",
        //     companyLogo: "https://ik.imagekit.io/vrchd4vczr/CompanyLogos/techture.jfif?updatedAt=1700908305341",
        //     companyLocation: "Indore M.P.",
        //     dateFrom: "2020-01-30",
        //     dateTo: "2021-04-02",
        //     companyDesignation: "BIM Intern",
        //     timeServed: 15
        // }