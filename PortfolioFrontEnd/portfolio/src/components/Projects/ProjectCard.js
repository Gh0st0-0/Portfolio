import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({proj}) => {
    return (
        <Link to={'getProject/${proj.id}'} >
            <div>

            </div>
        </Link>
    )
}

export default ProjectCard;