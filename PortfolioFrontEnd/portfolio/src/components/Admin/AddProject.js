import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function AddProject(){

    const [project, setProject] = useState(
        {
            projectTitle: "",
            affeleatedCompany: "",
            discription: "",
            releventLinks: "",
            projectStartDate: "",
            projectEndDate: "",
            projectDuration: 0,
            projectRole: "",
            responsibility: "",
            images: [],
            technologiesUsed: ""
        }
    )

    const [projectImage, setProjectImage] = useState(
        {
            imageName: "",
            imageURL: ""
        }
    )

    const navigate = useNavigate()

    async function persistProject(){
        const {data} = await axios.post();
        setProject(data);
    }
    
    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setProject({...project, [name]: value})
    }

    const HandleImageChanges = (event) =>{
        let {name, value} = event.target;
        setProjectImage({...projectImage, [name]: value})
    }

    async function persistProjectImage(){
        const {data} = true;
        // const {data} = await axios.post();
        data && project.images.push(projectImage);
    }

    // Add image to the project / check java method

    return (
        <div className={"Admin-Add-Project"}>
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Add Project
            </h2>
            <div className={'Admin-Add-form col-md-6'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'projectTitle'}>Project Title</label>
                        <input type={'text'} className={'form-control'} id={'projectTitle'} name={'projectTitle'} value={project.projectTitle} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'affeleatedCompany'} >Under the Company</label>
                        <input type={'text'} className={'form-control'} id={'affeleatedCompany'} name={'affeleatedCompany'} value={project.affeleatedCompany} onChange={HandleChanges} />
                    </div>
                </div>
                <div className={'group'}>
                    <label htmlFor={'projectRole'}>Role in the Project</label>
                    <input type={'text'} className={'form-control'} id={'projectRole'} name={'projectRole'} value={project.projectRole} onChange={HandleChanges} />
                </div>
                <div className={'group'}>
                    <label htmlFor={'technologiesUsed'}>Technologies Used</label>
                    <input type={'text'} className={'form-control'} id={'technologiesUsed'} name={'technologiesUsed'} value={project.technologiesUsed} onChange={HandleChanges} />
                </div>
                <div className={'group'}>
                    <label htmlFor={'responsibility'}>Responsibility</label>
                    <textarea className="form-control" id="responsibility" rows="2" name={'responsibility'} value={project.responsibility} onChange={HandleChanges} ></textarea>
                </div>
                <div className={'group'}>
                    <label htmlFor={'discription'}>Discription</label>
                    <textarea className="form-control" id="discription" rows="3" name={'discription'} value={project.discription} onChange={HandleChanges} ></textarea>
                </div>
                <div className={'row'}>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'projectStartDate'}>Project Start Date</label>
                        <input type={'date'} className={'form-control'} id={'projectStartDate'} name={'projectStartDate'} value={project.projectStartDate} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'projectEndDate'}>Project End Date</label>
                        <input type={'date'} className={'form-control'} id={'projectEndDate'} name={'projectEndDate'} value={project.projectEndDate} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-4'}>
                        <label htmlFor={'projectDuration'}>Project Duration</label>
                        <input type={'number'} className={'form-control'} id={'projectDuration'} name={'projectDuration'} value={project.projectDuration} onChange={HandleChanges} />
                    </div>
                </div>
                <button className={'custom-button'}>Add Project</button>
            </div>
            {/* Add project images */}
            <div className={'Admin-Add-Images'}>
                <span>Add 7 Images</span>
                <span>{project.images.length}/7</span>
                <div className={'Admin-Image-form'}>
                    <div className={'row'}>
                        <div className={'group col-md-6'}>
                            <label htmlFor={'imageName'}>Image Name</label>
                            <input type={'text'} className={'form-control'} id={'imageName'} name={'imageName'} value={projectImage.imageName} onChange={HandleImageChanges} />
                        </div>
                        <div className={'group col-md-6'}>
                            <label htmlFor={'imageURL'} >Image URL</label>
                            <input type={'text'} className={'form-control'} id={'imageURL'} name={'imageURL'} value={projectImage.imageURL} onChange={HandleImageChanges} />
                        </div>
                    </div>
                    <button className={'btn btn-primary col-md-2'}>Add Image</button>
                </div>
                {project.images && <div className={'Admin-Add-Project-Images table-responsive'}>
                    <table className={'table'}>
                        <thead>
                            <tr>
                                <th scope={'col'}>S. no.</th>
                                <th scope={'col'}>Image</th>
                                <th scope={'col'}>Image Name</th>
                                <th scope={'col'}>Image URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {project.images && project.images.map((image) =>
                                <tr key={image.id}>
                                    <td >{image.id}</td>
                                    <td ><img src={image.imageURL} alt={image.imageName} /> </td>
                                    <td ><h4>{image.imageName}</h4></td>
                                    <td ><input type={'text'} className={'form-control'} id={'imageURL'} name={'imageURL'} value={image.imageURL} onChange={HandleChanges} /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>}
            </div>
        </div>
    )
}