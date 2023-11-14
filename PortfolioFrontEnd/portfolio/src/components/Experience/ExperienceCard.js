import React from 'react';

const ExperienceCard = ({exper}) => {
    return (
        <div className={'ExperienceCard'}>
            <div>
                <h1>{exper.companyName}</h1>  <h1>: {exper.companyLocation}</h1>
            </div>
        </div>
    )
}

export default ExperienceCard;