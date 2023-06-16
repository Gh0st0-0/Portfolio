// Imports
import React, { lazy, useState, Suspense } from 'react'
// import ProjectCard from './ProjectCard';

const ProjectCard = lazy(() => import('./ProjectCard'));

export default function ProjectContainer() {

    const [projects, setProjects] = useState([
        {
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
        }
    ]);

    return (
        <div className={'ProjectContainer'}>
            <Suspense fallback={<h1>Loading...</h1>}>
                {projects && projects.map((proj) => 
                    <ProjectCard key={proj.id} proj={proj} />
                )}
            </Suspense>
        </div>
    )
}
