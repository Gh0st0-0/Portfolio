import React, { lazy, useState, Suspense, useEffect } from 'react';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";

const AcademicsCard = lazy(() => import('./AcademicsCard'));

export default function AcademicsContainer() {
    const [allAcademics, setAllAcademics] = useState([]);

    async function fetchAllAcademics () {
        const {data} = await axios.get("http://localhost:8080/academics/fetchList/getCand/1");
        setAllAcademics(data);
    }

    useEffect(() => {
        fetchAllAcademics()
    },[]);

    return (
        <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
            <div className={'Academics-Container'}>
               {allAcademics && allAcademics.map((academic) => 
                   <AcademicsCard key={academic.id} academic={academic} />
               )}
            </div>
        </Suspense>
    );
}