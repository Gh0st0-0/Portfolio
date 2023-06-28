import React from 'react';
import { Link } from 'react-router-dom';

const AdminITSkillCard =({skill})=>{
    const prog = (Number(skill.score)*10);
    return (
        <Link to={'/admin/getITSkill/${skill.id}'}>
            <div className={'IT-Card'}>
                <h3>{skill.technologies}</h3>
                <h4>Version: {skill.version}</h4>
                <div className={'IT-Progress'}>
                    <i className={skill.iconsClass}></i>
                    <div className={'IT-Progress-bar'}>
                        <div className={'IT-Progress-bar-fill'} style={{ width: `${prog}%` }}>
                            {skill.score}/10
                        </div>
                    </div>
                </div>
                {/* <i class='bx bxl-java' style='color:#2bb717' ></i> */}
            </div>
        </Link>
    )
}

export default AdminITSkillCard;