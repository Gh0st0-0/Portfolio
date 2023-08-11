import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';

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
        notify(); // on success
    }

    const notify = () =>{
        toast.success('Other Skill Added Successfully.', {
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

    return (
        <div className={'Admin-Add-OtherSkill'}>
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Add Other Skills
            </h2>

            <div className={'Admin-Add-Other-form col-md-4'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'technologies'}>Technologies</label>
                        <input type={'text'} className={'form-control'} id={'technologies'} name={'technologies'} value={otherSkill.technologies} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'version'}>Version</label>
                        <input type={'text'} className={'form-control'} id={'version'} name={'version'} value={otherSkill.version} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-8'}>
                        <label htmlFor={'iconClass'}>Icon Class</label>
                        <input type={'text'} className={'form-control'} id={'iconClass'} name={'iconClass'} value={otherSkill.iconsClass} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'score'}>Score</label>
                        <select id={'score'} className={'form-control'} name={'score'} onChange={HandleChanges}>
                            <option selected>{otherSkill.score}</option>
                            {Array.from({ length: 10}, (_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={'custom-button'}>Add</button>
            </div>
        </div>
    )
}