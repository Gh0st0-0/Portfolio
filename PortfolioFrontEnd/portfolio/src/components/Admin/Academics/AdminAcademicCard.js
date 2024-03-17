import React from 'react';
import { Link } from 'react-router-dom';

const AdminAcademicCard = ({academic}) => {
  return (
    <Link to={`/admin/getAcademic/${academic.id}`}>
        <div className={'Academic-Card'}>
            <h2>
                {academic.collegeSchoolName} 
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
    </Link>
  )
}

export default AdminAcademicCard
