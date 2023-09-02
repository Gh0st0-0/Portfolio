import React from "react";
import { Link } from "react-router-dom";

const AddAcademicsCard = () => {
    return (
        <Link className={'Add-Academics-Card'} to={'/admin/add-Academics'}>
            <div>
                <i className='bx bx-plus-medical bx-lg bx-lg' ></i>
            </div>
        </Link>
    )
}

export default AddAcademicsCard;