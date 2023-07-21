import React from 'react';
import { useContext, useEffect, useState, lazy, Suspense } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import {useNavigate} from "react-router-dom";

const AdminProjectCard = lazy(() => import('./AdminProjectCard'));
const AdminITSkillCard = lazy(() => import('./AdminITSkillCard'));
const AdminOtherSkillCard = lazy(() => import('./AdminOtherSkillCard'));
const AddProjectCard = lazy(() => import('./AddProjectCard'));
const AddITSkillCard = lazy(() => import('./AddITSkillCard'));
const AddOtherSkillCard = lazy(() => import('./AddOtherSkillCard'));

export default function Admin() {

    const navigate = useNavigate()

    const [projects, setProjects] = useState(
    [
        {
            id: 1,
            projectTitle: "Advertisement Portal",
            affeleatedCompany: "Sunbeam-Infotech",
            discription: "My website serves as a marketing portal, connecting companies with diverse packages and plans to promote their products. It offers advertising opportunities for submitted products, aiding in effective marketing strategies.",
            releventLinks: "#",
            projectStartDate: "2023-02-20",
            projectEndDate: "2023-03-15",
            projectDuration: 4,
            projectRole: "Project Lead and FUllstack Developer",
            responsibility: "Develope the Frontend and the backend and allocate tasks and manage progress",
            images: [
                {
                    id: 1,
                    imageName: "RavenAdverts_HomePage",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/HomePage.jpeg?updatedAt=1686480413130"
                },
                {
                    id: 2,
                    imageName: "RavenAdverts_ClientPage",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerLandingPageAfterAddingProduct.jpeg?updatedAt=1686480413140"
                },
                {
                    id: 3,
                    imageName: "RavenAdverts_RegisterationPage",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/CustomerRegistration.jpeg?updatedAt=1686480413055"
                },
                {
                    id: 4,
                    imageName: "RavenAdverts_LoginPage",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/LoginPage.jpeg?updatedAt=1686480413054"
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
        },
        {
            id: 2,
            projectTitle: "Delhi Metro Phase 4",
            affeleatedCompany: "Techture Pvt. Ltd.",
            discription: "Techture is responsible for the comprehensive BIM modeling and 4D/5D simulation of Delhi Metro's Phase 4 project. They have also stationed a BIM coordinator on-site to enhance communication and project execution, aiming to improve last-mile connectivity in the NCR housing hubs.",
            releventLinks: "https://www.techture.global/projects/delhi-metro-phase-4",
            projectStartDate: "2019-03-07",
            projectEndDate: "2022-05-01",
            projectDuration: 164,
            projectRole: "Coordinated Drawing Drafter and QA",
            responsibility: "Generation of coordinated drawings for LOD 300 and LOD 400 Models.",
            images: [
                {
                    id: 10,
                    imageName: "Techture_Logo",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/Techture_Logo.jpg?updatedAt=1688732534525"
                },
                {
                    id: 11,
                    imageName: "DMRC_Cover",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/Cover_DMRC.jpg?updatedAt=1688732534548"
                },
                {
                    id: 12,
                    imageName: "DMRC_Magenta_Line",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_Magenta_Line.jpg?updatedAt=1688732534275"
                },
                {
                    id: 13,
                    imageName: "DMRC_Pile_Reference_Drawing",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_Pile.jpg?updatedAt=1688733012349"
                },
                {
                    id: 14,
                    imageName: "DMRC_Pile_Reference",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_PileRef.jpg?updatedAt=1688734556274"
                },
                {
                    id: 15,
                    imageName: "DMRC_Pile_Plinth_Reference_Drawing",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/DMRC_Rebar_Drawing-2.jpg?updatedAt=1688734226927"
                },
                {
                    id: 16,
                    imageName: "DMRC_Pile_Drawing",
                    imageURL: "https://ik.imagekit.io/vrchd4vczr/DMRC-Phase-4/Pile-drawing.jpg?updatedAt=1688734873043"
                }
            ],
            technologiesUsed: "BIM, Infrastructure, Revit, AutoCAD, Naviswork"
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
                            <i className='bx bx-receipt' ></i>
                            <span onClick={()=> navigate('/admin/manage-testimonies')}>Testimonies</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i className='bx bx-arrow-back' ></i>
                            <span onClick={()=> navigate('/cand_admin')}>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={'CrudHolder'}>
                <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
                    {projects && <div className={'Project-Holder'}>
                        <AddProjectCard />
                        {projects && projects.map((proj) => 
                            <AdminProjectCard key={proj.id} proj={proj} />
                        )}
                    </div>}
                    {allTechs && <div className={'IT-Skill-Holder'}>
                        <div>
                            <AddITSkillCard />
                        </div>
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
                    </div>}
                    {allOtherSkills && <div className={'Admin-OtherSkill-Container'}>
                        <div>
                            <AddOtherSkillCard />
                        </div>
                        {allOtherSkills && allOtherSkills.map((skill) =>
                            <AdminOtherSkillCard key={skill.id} skill={skill} />
                        )}
                    </div>}
                </Suspense>
            </div>
        </div>
    )
}