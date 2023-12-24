import React from 'react';
import { Link } from 'react-router-dom';

const AddExperienceCard = () => {
    return (
        <Link className={'Add-Experience-Card'} to={'/admin/add-Experience'}>
            <div>
                <i className='bx bx-plus-medical bx-lg bx-lg' ></i>
            </div>
        </Link>
    )
}

export default AddExperienceCard;