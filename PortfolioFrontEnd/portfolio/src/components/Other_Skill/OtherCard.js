import React from 'react';

const OtherCard = ({skill}) => {
    const prog = (Number(skill.score)*10);
    return (
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
    )
}

export default OtherCard;