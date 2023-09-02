import React from 'react';
import { Link } from 'react-router-dom';

const AdminOtherSkillCard =({skill}) => {
    const prog = (Number(skill.score)*10);
    return(
        <Link to={`/admin/getOtherSkill/${skill.id}`}>
            <div className={'Other-Card'}>
                <h2>
                    {skill.technologies}
                </h2>
                <h3>
                    Version: {skill.version}
                </h3>
                <div className={'Other-Progress'}>
                    <i className={skill.iconsClass} ></i>
                    <div className={'Other-Progress-bar'}>
                        <div className={'Other-Progress-bar-fill'} style={{ width: `${prog}%` }}>
                            {skill.score}/10
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AdminOtherSkillCard;