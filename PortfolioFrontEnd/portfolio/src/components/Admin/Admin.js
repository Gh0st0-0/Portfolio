import React from 'react';
import { useContext, useEffect, useState } from 'react';

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

    async function fetchAllProjects() {

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
                            <i class='bx bxs-briefcase'></i>
                            <span onClick={fetchAllProjects}>All Projects</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i class='bx bx-code-alt' ></i>
                            <span onClick={fetchAllProjects}>All IT-Skills</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i class='bx bx-shuffle' ></i>
                            <span onClick={fetchAllProjects}>All Non-IT-Skills</span>
                        </li>
                        <li className={'nav-item'} onClick={handlaNavItem}>
                            <i class='bx bx-arrow-back' ></i>
                            <span onClick={fetchAllProjects}>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                
            </div>
        </div>
    )
}