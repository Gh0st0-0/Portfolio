import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

export default function EditITSkill() {
    const {id} = useParams();

    async function fetchITSkillId() {
        const {data} = await axios.post();
        setItSkill(data);
    }

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setItSkill({...itSkill, [name]: value})
    }

    const [itSkill, setItSkill] = useState(
        {
            id: 1,
            technologies: "Core Java",
            version: "11",
            score: "7",
            iconsClass: "bx bxl-java bx-border bx-lg",
            category: "Language"
        }
    );

    return (
        <div className={'Admin-Edit-Skill'}>
            <h2>
                Edit IT-Skill
            </h2>

            <div className={'Admin-ITEdit-form col-md-4'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'technologies'}>Technology</label>
                        <input type={'text'} className={'form-control'} id={'technology'} value={itSkill.technologies} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'version'}>Version</label>
                        <input type={'text'} className={'form-control'} id={'version'} value={itSkill.version} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'iconsClass'}>Icon Class</label>
                        <input type={'text'} className={'form-control'} id={'iconsClass'} value={itSkill.iconsClass} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'category'}>Category</label>
                        <select id={'category'} className={'form-control'} onChange={HandleChanges} >
                            <option selected >{itSkill.category}</option>
                            <option value={'Language'}>Language</option>
                            <option value={'DataBase'}>DataBase</option>
                            <option value={'WebTechnology'}>WebTechnology</option>
                        </select>
                    </div>
                    <div className={'group col-md-2'}>
                        <label htmlFor={'score'}>Score</label>
                        <select id={'score'} className={'form-control'} onChange={HandleChanges} >
                            <option selected>{itSkill.score}</option>
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