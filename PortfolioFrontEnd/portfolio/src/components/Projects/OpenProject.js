import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';


export default function OpenProject() {
    const {id} = useParams();

    // Dummy test for animation  Start
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    // Dummy test for animation  End
    

    // Dummy data is used, replaced by an axios call
    const [porject, setProject] = useState(
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
        }
    );

    async function fetchProject() {
        // const {data} = await axios.post('http://localhost:8080/project/getProject/${id}')
        // setProject(data);
    }

    // useEffect(() => {
    //     // fetchProject();
    // },[])
    

    return (
        <div className={'OpenedProjectContainer'}>
            <a href={porject.releventLinks}>
                <div className={`box ${scrollY > 100 && scrollY < 850 ? 'animate' : ''}`}>
                        <span>{porject.projectTitle}</span>
                        <img src={porject.images[0].imageURL} loading={'lazy'} alt={porject.images[0].imageName} />
                </div>
            </a>
            <div className={`box ${scrollY > 700 && scrollY < 1450 ? 'animate' : ''}`}>
                <img src={porject.images[1].imageURL} loading={'lazy'} alt={porject.images[1].imageName} />
                <p>{porject.discription}</p>
            </div>
            <div className={`box ${scrollY > 1300 && scrollY < 2050 ? 'animate' : ''}`}>
                <div className={'CompanyHolder'}>
                    <span>
                        Developed Under
                    </span>
                    <h3>
                        {porject.affeleatedCompany}
                    </h3>
                </div>
                <img src={porject.images[2].imageURL} loading={'lazy'} alt={porject.images[2].imageName} />
            </div>
        </div>
    )
}