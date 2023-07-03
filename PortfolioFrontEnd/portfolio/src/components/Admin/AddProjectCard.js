import React from 'react';
import { Link } from 'react-router-dom';

const AddProjectCard = () => {
    return(
        <Link className={'Add-Project-Card'} to={'/admin/add-project'}>
            <div>
                <i class='bx bx-plus-medical bx-lg bx-lg' ></i>
            </div>
        </Link>
    )
}

export default AddProjectCard;