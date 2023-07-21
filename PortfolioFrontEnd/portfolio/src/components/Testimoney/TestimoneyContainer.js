import React, { lazy, useState, Suspense, useEffect } from 'react';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";

const TestimoneyCard = lazy(() => import('./TestimoneyCard'))

export default function TestimoneyContainer() {

    const [allTestis, setAllTestis] = useState(
        [
            {
                id: 1,
                showAtTop: true,
                name: "Saayan Chatergy",
                designation: "Manager at Techture pvt. ltd.",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                id: 2,
                showAtTop: true,
                name: "Test2",
                designation: "Manager",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                id: 3,
                showAtTop: true,
                name: "Test3",
                designation: "Manager",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    )

    async function fetchAllTestimonies () {
        const {data} = await axios.get("http://localhost:7070/testimony/getallTestimoney");
        setAllTestis(data);
    }

    useEffect(() => {
        // fetchAllTestimonies();
    },[])

    return (
        <Suspense fallback={<CircleLoader className={'Loader'} color="#11c713" />}>
            <div className="Testi-Container">
                <h2>
                    Testimoneies
                </h2>
                <div className={'Cntainer-Holder'}>
                    {allTestis && allTestis.map((testimoney) =>
                        testimoney.showAtTop && <TestimoneyCard key={testimoney.id} testimoney={testimoney} />
                    )}
                </div>
            </div>
        </Suspense>
    )
}