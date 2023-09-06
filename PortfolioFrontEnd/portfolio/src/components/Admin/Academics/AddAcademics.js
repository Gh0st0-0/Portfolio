import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import {toast} from 'react-toastify';

export default function AddAcademics(){
    const navigate = useNavigate();

    const [academic, setAcademic] = useState({
        collegeSchoolName: "",
        stdGrade: "",
        scoreCGPA: "",
        yearOfPassing: "",
        field: "",
        cretificate: "",
        website: ""
    });

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setAcademic({...academic, [name]: value})
    }

    async function persistAcademicRecord() {
        try{
            const {data} = await axios.post("http://localhost:8080/academics/persist/saveAcademics/getcand/1", academic);
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
        <div className={'Admin-Add-Academic'}>
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Add Academic Record
            </h2>

            <div className={'Admin-Add-Academic-form col-md-4'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'collegeSchoolName'}>College/School Name</label>
                        <input type={'text'} className={'form-control'} name={'collegeSchoolName'} id={'collegeSchoolName'} value={academic.collegeSchoolName} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'website'}>Website</label>
                        <input type={'text'} className={'form-control'} name={'website'} id={'website'} value={academic.website} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'cretificate'}>Certification</label>
                        <input type={'text'} className={'form-control'} name={'cretificate'} id={'cretificate'} value={academic.cretificate} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'stdGrade'}>Standard/Grade</label>
                        <input type={'text'} className={'form-control'} name={'stdGrade'} id={'stdGrade'} value={academic.stdGrade} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-5'}>
                        <label htmlFor={'field'}>Field</label>
                        <input type={'text'} className={'form-control'} name={'field'} id={'field'} value={academic.field} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'yearOfPassing'}>Year Of Passing</label>
                        <input type={'text'} className={'form-control'} name={'yearOfPassing'} id={'yearOfPassing'} value={academic.yearOfPassing} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-3'}>
                        <label htmlFor={'scoreCGPA'}>Score</label>
                        <input type={'text'} className={'form-control'} name={'scoreCGPA'} id={'scoreCGPA'} value={academic.scoreCGPA} onChange={HandleChanges} />
                    </div>
                </div>
                <button className={'custom-button'} onClick={persistAcademicRecord}>Add Academic Record</button>
            </div>
        </div>
    )
}