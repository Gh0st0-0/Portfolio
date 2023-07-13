import React from "react";
import { Link } from "react-router-dom";

const AddOtherSkillCard = () => {
    return(
        <Link className={'Add-Other-Skill-Card'} to={'/admin/add-other-skill'}>
            <div>
                <i class='bx bx-plus-medical bx-lg bx-lg' ></i>
            </div>
        </Link>
    )
}

export default AddOtherSkillCard;