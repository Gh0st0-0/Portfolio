// Imports
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

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
                    imageURL: "https://imgur.com/a/jtv58VY"
                },
                {
                    id: 2,
                    imageName: "RavenAdverts_LoginPage",
                    imageURL: "https://imgur.com/R9nb8v5"
                },
                {
                    id: 3,
                    imageName: "RavenAdverts_RegisterationPage",
                    imageURL: "https://imgur.com/2cOFD0c"
                },
                {
                    id: 4,
                    imageName: "RavenAdverts_CompanyRegisterationPage",
                    imageURL: "https://imgur.com/tBgbpMf"
                }
                
            ],
            technologiesUsed: "Java, J2EE, React JS, Node JS, JavaScript, CSS"
        }
    ]);

    return (
        <div className={'ProjectContainer'}>
            {projects && projects.map((proj) => 
                <ProjectCard key={proj.id} proj={proj} />
            )}
        </div>
    )
}
