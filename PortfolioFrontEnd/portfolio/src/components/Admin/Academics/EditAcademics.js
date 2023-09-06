import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditAcademics() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [academic, setAcademic] = useState({
        collegeSchoolName: "Sunbeam Infotech",
        stdGrade: "PG-Diploma",
        scoreCGPA: "71%",
        yearOfPassing: "2023",
        field: "Web Development",
        cretificate: "PG-DAC",
        website: "https://www.sunbeaminfo.com"
    });

    // async function fetchAcademicsById(){
    //     try{ 
    //         const {data} = await axios.post(`http://localhost:8080/academics/getAcademics/${id}`);
    //         setAcademic(data);
    //     } catch(error) {
    //         throw new Error(error);
    //     }
    // }

    useEffect(()=>{
        // fetchAcademicsById();
        console.log(id);
    },[id]);

    async function editAcademicRecord() {
        try{
            const { data } = await axios.post(`http://localhost:8080/academics/persist/update6`,academic);
            setAcademic(data);
        } catch(error) {
            throw new Error(error);
        }
    }

    const handleChanges = (event) => {
        let {name, value} = event.target;
        setAcademic({...academic, [name]: value});
    }

    return (
        <div className="Admin-Edit-Academics">
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Edit Academics
            </h2>

            <div className={'Admin-AcademicsEdit-form col-md-4'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'collegeSchoolName'}>College/School Name</label>
                        <input type={'text'} className={'form-control'} name={'collegeSchoolName'} id={'collegeSchoolName'} value={academic.collegeSchoolName} onChange={handleChanges}></input>
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'website'}>Website</label>
                        <input type={'text'} className={'form-control'} name={'website'} id={'website'} value={academic.website} ></input>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'cretificate'}>Certificate</label>
                        <input type={'text'} className={'form-control'} name={'cretificate'} id={'cretificate'} value={academic.cretificate} onChange={handleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'stdGrade'}>Standard/Grade</label>
                        <input type={'text'} className={'form-control'} name={'stdGrade'} id={'stdGrade'} value={academic.stdGrade} onChange={handleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-5'}>
                        <label htmlFor={'field'}>Field</label>
                        <input type={'text'} className={'form-control'} name={'field'} id={'field'} value={academic.field} onChange={handleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'yearOfPassing'}>Year of Passing</label>
                        <input type={'text'} className={'form-control'} name={'yearOfPassing'} id={'yearOfPassing'} value={academic.yearOfPassing} onChange={handleChanges} />
                    </div>
                    <div className={'group col-md-3'}>
                        <label htmlFor={'scoreCGPA'}>Year of Passing</label>
                        <input type={'text'} className={'form-control'} name={'scoreCGPA'} id={'scoreCGPA'} value={academic.scoreCGPA} onChange={handleChanges} />
                    </div>
                </div>
                <button className={'custom-button'} onClick={editAcademicRecord}>Edit Records</button>
            </div>
        </div>
    )
}