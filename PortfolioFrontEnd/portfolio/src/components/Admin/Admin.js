import React from 'react';
import { useContext, useEffect, useState, lazy, Suspense } from 'react';
import CircleLoader from "react-spinners/CircleLoader";

const AdminProjectCard = lazy(() => import('./AdminProjectCard'));
const AdminITSkillCard = lazy(() => import('./AdminITSkillCard'));
const AdminOtherSkillCard = lazy(() => import('./AdminOtherSkillCard'));
const AddProjectCard = lazy(() => import('./AddProjectCard'));

export default function Admin() {

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

    const [allTechs,setAllTechs] = useState(
        [
    		{
        		id: 1,
        		technologies: "Core Java",
        		version: "11",
        		score: "7",
        		iconsClass: "bx bxl-java bx-border bx-lg",
                category: "Language"
    		},
    		{
        		id: 2,
        		technologies: "MySQL",
        		version: "8.0 C.E.",
        		score: "6",
        		iconsClass: "bx bxs-data bx-border bx-lg",
                category: "DataBase"
    		},
    		{
        		id: 3,
        		technologies: "HTML",
        		version: "5",
        		score: "7",
        		iconsClass: "bx bxl-html5 bx-border bx-lg",
                category: "WebTechnology"
    		}
	    ]
    );

    const [allOtherSkills, setAllOtherSkills] = useState(
        [
            {
                id: 1,
                technologies: "PTC Creo",
                version: "8",
                score: "7",
                iconsClass: "bx bx-edit-alt bx-border bx-lg"
            },
            {
                id: 2,
                technologies: "AutoDesk Revit",
                version: "v2020",
                score: "7",
                iconsClass: "bx bx-building-house bx-border bx-lg"
            },
            {
                id: 3,
                technologies: "Ansys Fluent",
                version: "2021 R2",
                score: "6",
                iconsClass: "bx bx-wind bx-border bx-lg"
            },
            {
                id: 4,
                technologies: "Video Editing",
                version: "WonderShare Filmora ",
                score: "7",
                iconsClass: "bx bx-video-plus bx-border bx-lg"
            }
        ]
    );

    async function fetchAllProjects() {
        // fetch product and set everything else as null
        setAllTechs(null);
        setAllOtherSkills(null);
    } 

    async function fetchAllOtherSkill() {
        // fetch projects and set everything else as null
        setAllTechs(null);
        setProjects(null);
    }

    async function fetchAllITSkills() {
        // fetch all the it skills and set else as null
        setAllOtherSkills(null);
        setProjects(null);
    }

    // State management to handle the sidebar
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsOpen(!isOpen);
    };

    const handlaNavItem = (event) => {
        const navItem = document.querySelectorAll('nav .nav-item');
        navItem.forEach((navItem) =>{
            navItem.classList.remove('active');
        });
        event.targer.classList.add('active');
    };

    return(
        <div className={'holderAdmin'}>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className={'toggle'} onClick={toggleSidebar}>
                    <i className="bx bx-chevron-right"></i>
                </div>

                <div className={'logo'}>
                    <h3>Welcome Admin</h3>
                </div>
                <nav>
                    <div className={'nav-title'}>
                        Saumya
                    </div>
                    <ul>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i className='bx bxs-briefcase'></i>
                            <span onClick={fetchAllProjects}>All Projects</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i className='bx bx-code-alt' ></i>
                            <span onClick={fetchAllITSkills}>All IT-Skills</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i className='bx bx-shuffle' ></i>
                            <span onClick={fetchAllOtherSkill}>All Non-IT-Skills</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i className='bx bx-arrow-back' ></i>
                            <span onClick={fetchAllProjects}>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={'CrudHolder'}>
                <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
                    <div className={'Project-Holder'}>
                        <AddProjectCard />
                        {projects && projects.map((proj) => 
                            <AdminProjectCard key={proj.id} proj={proj} />
                        )}
                    </div>
                    <div className={'IT-Skill-Holder'}>
                        <div>
                            <h2>
                                Language
                            </h2>
                            <div className="Admin-ITCard-Container">
                                {allTechs && allTechs.map((skill) =>
                                    skill.category==="Language" && <AdminITSkillCard key={skill.id} skill={skill} />
                                )}
                            </div>
                        </div>
                        <div>
                            <h2>
                                Web-Development
                            </h2>
                            <div className="Admin-ITCard-Container">
                                {allTechs && allTechs.map((skill) =>
                                    skill.category==="WebTechnology" && <AdminITSkillCard key={skill.id} skill={skill} />
                                )}
                            </div>
                        </div>
                        <div>
                            <h2>
                                Data-Base
                            </h2>
                            <div className="Admin-ITCard-Container">
                                {allTechs && allTechs.map((skill) =>
                                    skill.category==="DataBase" && <AdminITSkillCard key={skill.id} skill={skill} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={'Admin-OtherSkill-Container'}>
                        {allOtherSkills && allOtherSkills.map((skill) =>
                            <AdminOtherSkillCard key={skill.id} skill={skill} />
                        )}
                    </div>
                </Suspense>
            </div>
        </div>
    )
}