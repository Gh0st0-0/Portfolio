import React from 'react';

const ExperienceCard = ({exper}) => {
    return (
        <div className={'ExperienceCard'}>
            <div>
                <img src={exper && exper.companyLogo} loading={'lazy'} alt={exper.companyName + " Logo"}/>
            </div>
            <div className = {'CompanyInfo'}>
                <div>
                    <h1>{exper.companyName}</h1>  <h1>: {exper.companyLocation}</h1>
                </div>
                <div>
                    <h2>Designation: {exper.companyDesignation}</h2>
                </div>
                <div>
                    <h2>Date From: {exper.dateFrom}</h2>
                </div>
                {exper.dateTo && <div>
                    <h2>Date To: {exper.dateTo}</h2>
                </div>}
                {exper.dateTo != null ? <div>
                    <h2>Period Dedicated: {exper.timeServed} Months</h2> 
                </div> : 
                <div>
                    <h2>Period Dedicating: {exper.timeServed} Months</h2>
                </div>
                }
            </div>
        </div>
    )
}

export default ExperienceCard;