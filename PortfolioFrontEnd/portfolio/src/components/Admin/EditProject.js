import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

export default function EditProject(){
    const {id} = useParams();

    async function fetchProjectById() {
        const {data} = await axios.post();
        setProject(data);
    }

    const [project, setProject] = useState({
        id: 1,
        projectTitle: "Advertisement Portal",
        affeleatedCompany: "Sunbeam-Infotech",
        discription: "My website serves as a marketing portal, connecting companies with diverse packages and plans to promote their products. It offers advertising opportunities for submitted products, aiding in effective marketing strategies.",
        releventLinks: "#",
        projectStartDate: "2023-02-20",
        projectEndDate: "2023-03-15",
        projectDuration: 4,
        projectRole: "Project Lead and Fullstack Developer",
        responsibility: "Develope the Frontend and the backend and allocate tasks and manage progress",
        images: [
            {
                id: 1,
                imageName: "RavenAdverts_HomePage",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/HomePage.jpeg?updatedAt=1686480413130"
            },
            {
                id: 2,
                imageName: "RavenAdverts_LoginPage",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/LoginPage.jpeg?updatedAt=1686480413054"
            },
            {
                id: 3,
                imageName: "RavenAdverts_RegisterationPage",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerRegistration.jpeg?updatedAt=1686480413055"
            },
            {
                id: 4,
                imageName: "RavenAdverts_ClientPage",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerLandingPageAfterAddingProduct.jpeg?updatedAt=1686480413140"
            },
            {
                id: 5,
                imageName: "RavenAdverts_CustomerPaymentPortal",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerPaymentPortal.jpeg?updatedAt=1686480413205"
            },
            {
                id: 6,
                imageName: "RavenAdverts_CustomerBill",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerBill.jpeg?updatedAt=1686480413021"
            },
            {
                id: 7,
                imageName: "RavenAdverts_AdminPage",
                imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/AdminCrudOfCustomer.jpeg?updatedAt=1686480413137"
            }
            
        ],
        technologiesUsed: "Java, J2EE, React JS, Node JS, JavaScript, CSS"
    });

    const HandleChanges = (event) =>{
        let {name, value} = event.target;
        setProject({...project, [name]: value})
    }

    return (
        <div className={'Admin-Edit-Project'}>
            <h2>
                Edit Project
            </h2>
            <div className={'Admin-Edit-form col-md-6'}>
                <div className={'row'}>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'projectTitle'}>Project Title</label>
                        <input type={'text'} className={'form-control'} id={'projectTitle'} name={'projectTitle'} value={project.projectTitle} onChange={HandleChanges} />
                    </div>
                    <div className={'group col-md-6'}>
                        <label htmlFor={'affeleatedCompany'}>Under the Company</label>
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
                <button className={'custom-button'}>Edit</button>
            </div>
            <div className={'Admin-Project-Images table-responsive'}>
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
            </div>

            </div>
    )
}