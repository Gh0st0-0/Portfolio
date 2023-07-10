import React from 'react';
import { Link } from 'react-router-dom';
const ProjectCard = ({proj}) => {
    return (
        <Link className={'ProjectCard'} to={'/project/getProject/${proj.id}'} >
            <img src={proj.images && proj.images[0].imageURL} loading={'lazy'} alt={proj.images && proj.images[0].imageName} />
            <p>{proj.projectTitle}</p>
            <div>
                <span className="ProjectCardSpan">
                    {proj.discription}
                </span>
            </div>
        </Link>
    );
}

export default ProjectCard;