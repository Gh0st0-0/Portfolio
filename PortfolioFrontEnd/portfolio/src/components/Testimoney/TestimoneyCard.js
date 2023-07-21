import React from 'react';

const TestimoneyCard = ({testimoney}) => {
    return (
        <div className={'Testi-Card'}>
            <div className="Designation-Holder">
                <h3>{testimoney.name},</h3>
                <h4>{testimoney.designation}</h4>
            </div>
            <div>
                <span>
                    {testimoney.message}
                </span>
            </div>
        </div>
    )
}

export default TestimoneyCard;