import React from "react";
import { Link } from "react-router-dom";

const AddITSkillCard = () => {
    return (
        <Link className={'Add-IT-Skill-Card'} to={'/admin/add-it-skill'}>
            <div>
                <i class='bx bx-plus-medical bx-lg bx-lg' ></i>
            </div>
        </Link>
    )
}

export default AddITSkillCard;