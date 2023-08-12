import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import {toast} from 'react-toastify';

export default function AddITSkill(){

    const navigate = useNavigate()

    const [itSkill, setItSkill] = useState(
        {
            technologies: "",
            version: "",
            score: "",
            iconsClass: "",
            category: ""
        }
    );

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setItSkill({...itSkill, [name]: value})
    }

    async function persistITSkill() {
        const {data} = await axios.post("http://localhost:8080/itskill/persist/saveskill/getcand/1");
        if(data)
            notify(); // on success
        else
            failure(); // on failure
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
        toast.error('Failed to add It-Skill. Try Again.', {
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

    return(
        <div className={'Admin-Add-Skill'}>
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Add IT Skill
            </h2>
            
            <div className={'Admin-Add-IT-form col-md-4'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'technologies'}>Technology</label>
                        <input type={'text'} className={'form-control'} name={'technologies'} id={'technology'} value={itSkill.technologies} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'version'}>Version</label>
                        <input type={'text'} className={'form-control'} name={'version'} id={'version'} value={itSkill.version} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'iconsClass'}>Icon Class</label>
                        <input type={'text'} className={'form-control'} name={'iconsClass'} id={'iconsClass'} value={itSkill.iconsClass} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'category'}>Category</label>
                        <select id={'category'} name={'category'} className={'form-control'} onChange={HandleChanges} >
                            <option selected >{itSkill.category}</option>
                            <option value={'Language'}>Language</option>
                            <option value={'DataBase'}>DataBase</option>
                            <option value={'WebTechnology'}>WebTechnology</option>
                        </select>
                    </div>
                    <div className={'group col-md-2'}>
                        <label htmlFor={'score'}>Score</label>
                        <select name={'score'} id={'score'} className={'form-control'} onChange={HandleChanges} >
                            <option selected>{itSkill.score}</option>
                            {Array.from({ length: 10 }, (_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={'custom-button'} onClick={persistITSkill}>Add Skill</button>
            </div>
        </div>
    )
}