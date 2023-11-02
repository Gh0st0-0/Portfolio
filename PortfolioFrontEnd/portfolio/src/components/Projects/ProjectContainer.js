// Imports
import axios from 'axios';
import React, { lazy, useState, Suspense, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const ProjectCard = lazy(() => import('./ProjectCard'));

export default function ProjectContainer() {

    const [projects, setProjects] = useState([]);

    async function fetchAllProjects(){
        const {data} = await axios.post('http://localhost:8080/project/AllProjects/getCand/1');
        setProjects(data);
        // console.log(data);
    }

    useEffect(
        () => {
            fetchAllProjects();
        }
    ,[]);


    return (
        <div className={'ProjectContainer'}>
            <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
                {projects && projects.map((proj) => 
                    <ProjectCard key={proj.id} proj={proj} />
                )}
            </Suspense>
        </div>
    )
}

// const [projects, setProjects] = useState([
    //     {
    //         id: 1,
    //         projectTitle: "Advertisement Portal",
    //         affeleatedCompany: "Sunbeam-Infotech",
    //         discription: "My website serves as a marketing portal, connecting companies with diverse packages and plans to promote their products. It offers advertising opportunities for submitted products, aiding in effective marketing strategies.",
    //         releventLinks: "#",
    //         projectStartDate: "2023-02-20",
    //         projectEndDate: "2023-03-15",
    //         projectDuration: 4,
    //         projectRole: "Project Lead and FUllstack Developer",
    //         responsibility: "Develope the Frontend and the backend and allocate tasks and manage progress",
    //         images: [
    //             {
    //                 id: 1,
    //                 imageName: "RavenAdverts_HomePage",
    //                 imageUR: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/HomePage.jpeg?updatedAt=1686480413130"
    //             },
    //             {
    //                 id: 2,
    //                 imageName: "RavenAdverts_ClientPage",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerLandingPageAfterAddingProduct.jpeg?updatedAt=1686480413140"
    //             },
    //             {
    //                 id: 3,
    //                 imageName: "RavenAdverts_RegisterationPage",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerRegistration.jpeg?updatedAt=1686480413055"
    //             },
    //             {
    //                 id: 4,
    //                 imageName: "RavenAdverts_LoginPage",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/LoginPage.jpeg?updatedAt=1686480413054"
    //             },
    //             {
    //                 id: 5,
    //                 imageName: "RavenAdverts_CustomerPaymentPortal",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerPaymentPortal.jpeg?updatedAt=1686480413205"
    //             },
    //             {
    //                 id: 6,
    //                 imageName: "RavenAdverts_CustomerBill",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerBill.jpeg?updatedAt=1686480413021"
    //             },
    //             {
    //                 id: 7,
    //                 imageName: "RavenAdverts_AdminPage",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/AdminCrudOfCustomer.jpeg?updatedAt=1686480413137"
    //             }
    //         ],
    //         technologiesUsed: "Java, J2EE, React JS, Node JS, JavaScript, CSS"
    //     },
    //     {
    //         id: 2,
    //         projectTitle: "Delhi Metro Phase 4",
    //         affeleatedCompany: "Techture Pvt. Ltd.",
    //         discription: "Techture is responsible for the comprehensive BIM modeling and 4D/5D simulation of Delhi Metro's Phase 4 project. They have also stationed a BIM coordinator on-site to enhance communication and project execution, aiming to improve last-mile connectivity in the NCR housing hubs.",
    //         releventLinks: "https://www.techture.global/projects/delhi-metro-phase-4",
    //         projectStartDate: "2019-03-07",
    //         projectEndDate: "2022-05-01",
    //         projectDuration: 164,
    //         projectRole: "Coordinated Drawing Drafter and QA",
    //         responsibility: "Generation of coordinated drawings for LOD 300 and LOD 400 Models.",
    //         images: [
    //             {
    //                 id: 10,
    //                 imageName: "Techture_Logo",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/Techture_Logo.jpg?updatedAt=1688732534525"
    //             },
    //             {
    //                 id: 11,
    //                 imageName: "DMRC_Cover",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/Cover_DMRC.jpg?updatedAt=1688732534548"
    //             },
    //             {
    //                 id: 12,
    //                 imageName: "DMRC_Magenta_Line",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_Magenta_Line.jpg?updatedAt=1688732534275"
    //             },
    //             {
    //                 id: 13,
    //                 imageName: "DMRC_Pile_Reference_Drawing",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_Pile.jpg?updatedAt=1688733012349"
    //             },
    //             {
    //                 id: 14,
    //                 imageName: "DMRC_Pile_Reference",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_PileRef.jpg?updatedAt=1688734556274"
    //             },
    //             {
    //                 id: 15,
    //                 imageName: "DMRC_Pile_Plinth_Reference_Drawing",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_Rebar_Drawing-2.jpg?updatedAt=1688734226927"
    //             },
    //             {
    //                 id: 16,
    //                 imageName: "DMRC_Pile_Drawing",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/Pile-drawing.jpg?updatedAt=1688734873043"
    //             }
    //         ],
    //         technologiesUsed: "BIM, Infrastructure, Revit, AutoCAD, Naviswork"
    //     }
    // ]);