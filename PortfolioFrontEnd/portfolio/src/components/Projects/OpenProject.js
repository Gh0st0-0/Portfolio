import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function OpenProject() {
    const { _id } = useParams();

    async function fetchProject (id) {
        try{
            const {data} = await axios.post(`http://localhost:8080/project/getProject/${id}`);
            setProject(data);
        }catch(error){
            console.error('Error fetching project: ', error);
        }
    }

    function checkId(){
        const pathName = window.location.pathname;
        const id = pathName.split('/').pop();
        console.log(id);
        return id;
    }
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
    const [porject, setProject] = useState({});

    useEffect(() => {
        if(_id === checkId())
            fetchProject(_id);
    },[_id])
    

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
            <div className={`box ${scrollY > 2000 && scrollY < 3050 ? 'animate' : ''}`}>
                <img src={porject.images[3].imageURL} loading={'lazy'} alt={porject.images[3].imageName} />
                <div className={'DateHolder'}>
                    <span>Started on: {porject.projectStartDate}</span>
                    <span>Ended on: {porject.projectEndDate}</span>
                    <span>Project Durqation: {porject.projectDuration} weeks</span>
                </div>
            </div>
            <div className={`box ${scrollY > 2600 && scrollY < 3850 ? 'animate' : ''}`}>
                <div className="RoleHolder">
                    <span>
                        Role in the project:
                    </span>
                    <h3>
                        {porject.projectRole}
                    </h3>
                </div>
                <img src={porject.images[4].imageURL} loading={'lazy'} alt={porject.images[4].imageName} />
            </div>
            <div className={`box ${scrollY > 3500 && scrollY < 4650 ? 'animate' : ''}`}>
                <img src={porject.images[5].imageURL} loading={'lazy'} alt={porject.images[5].imageName} />
                <p>
                    {porject.responsibility}
                </p>
            </div>
            <div className={`box ${scrollY > 4500 && scrollY < 5650 ? 'animate' : ''}`}>
                <div className="TechnologyHoldet">
                    <span>
                        Technologies Used:
                    </span>
                    <h3>
                        {porject.technologiesUsed}
                    </h3>
                </div>
                <img src={porject.images[6].imageURL} loading={'lazy'} alt={porject.images[6].imageName} />
            </div>
        </div>
    )
}

// const [porject, setProject] = useState(
    //     {
    //         id: 1,
    //         projectTitle: "Advertisement Portal",
    //         affeleatedCompany: "Sunbeam-Infotech",
    //         discription: "My website serves as a marketing portal, connecting companies with diverse packages and plans to promote their products. It offers advertising opportunities for submitted products, aiding in effective marketing strategies.",
    //         releventLinks: "#",
    //         projectStartDate: "2023-02-20",
    //         projectEndDate: "2023-03-15",
    //         projectDuration: 4,
    //         projectRole: "Project Lead and Fullstack Developer",
    //         responsibility: "Responsible for leading the team, overseeing project, and executing tasks. Proficient in front-end(HTML,CSS,JS) & back-end(Java,Node.js) development. Ensuring quality, and timely delivery.",
    //         images: [
    //             {
    //                 id: 1,
    //                 imageName: "RavenAdverts_HomePage",
    //                 imageURL: "https://ik.imagekit.io/vrchd4vczr/RavenAdverts/HomePage.jpeg?updatedAt=1686480413130"
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
    //     }
    // );