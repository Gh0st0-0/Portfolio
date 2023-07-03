import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

export default function EditOtherSkil(){
    const {id} = useParams();

    async function fetchOtherSkillId() {
        const {data} = await axios.post();
        setOtherSkill(data);
    }

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setOtherSkill({...otherSkill, [name]: value})
    }

    const [otherSkill, setOtherSkill] = useState(
        {
            id: 1,
            technologies: "PTC Creo",
            version: "8",
            score: "7",
            iconsClass: "bx bx-edit-alt bx-border bx-lg"
        }
    )

    return (
        <div className={'Admin-Edit-OtherSkill'}>
            <h2>
                Edit Non-IT-Skill
            </h2>

            <div className={'Admin-OtherEdit-form col-md-4'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'technologies'}>Technologies</label>
                        <input type={'text'} className={'form-control'} id={'technologies'} value={otherSkill.technologies} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'version'}>Version</label>
                        <input type={'text'} className={'form-control'} id={'version'} value={otherSkill.version} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-8'}>
                        <label htmlFor={'iconsClass'}>Icon Class</label>
                        <input type={'text'} className={'form-control'} id={'iconsClass'} value={otherSkill.iconsClass} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'score'}>Score</label>
                        <select id={'score'} className={'form-control'} onChange={HandleChanges} >
                            <option selected>{otherSkill.score}</option>
                            {Array.from({ length: 10 }, (_, index) => (
                                <option key={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={'custom-button'}>Edit</button>
            </div>
        </div>
    )
}