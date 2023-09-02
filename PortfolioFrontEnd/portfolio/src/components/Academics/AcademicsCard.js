import React from 'react'

const AcademicsCard = ({academic}) => {
  return (
    <div className={'Academic-Card'}>
        <h2>
            <a href={academic.website}>
              {academic.collegeSchoolName} 
              <i className='bx bx-link-external'></i>
            </a>
        </h2>
        <h3>
          <span>Certification: </span> {academic.cretificate}, {academic.stdGrade}
        </h3>
        <h4>
          <span>Field:</span> {academic.field}, {academic.yearOfPassing}
        </h4>
        <h4>
          <span>Score/CGPA:</span> {academic.scoreCGPA}
        </h4>
    </div>
  )
}

export default AcademicsCard