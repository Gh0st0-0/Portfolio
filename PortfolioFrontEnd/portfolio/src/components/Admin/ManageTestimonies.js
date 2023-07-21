import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function ManageTestimonies () {

    const [allTestimony, setAllTestimoney] = useState(
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

    const navigate = useNavigate()

    async function deleteTestimoney(id) {
        // const {data} = await axios.post();
        // setAllTestimoney(data);
        console.log(`delete ${id}`);
    }

    async function fetchAllTestimonies() {
        const {data} = await axios.get();
        setAllTestimoney(data);
    }

    async function manageVisibility(id) {
        // const {data} = await axios.post();
        // data && fetchAllTestimonies();
    }

    const handleToggle = (id) => {
        setAllTestimoney((prevTestimonies) =>
          prevTestimonies.map((testimony) =>
            testimony.id === id ? { ...testimony, showAtTop: !testimony.showAtTop } : testimony
          )
        );
        manageVisibility(id);
    };

    return (
        <div className="Admin-Manage-Testimoney">
            <div className={'Nav-In-Admin'}>
                <i className='bx bx-left-arrow-alt bx-lg' onClick={()=> navigate('/cand_admin')}></i>
                <i className='bx bx-log-out bx-lg' onClick={()=> navigate('/login')}></i>
            </div>
            <h2>
                Manage Testimonies
            </h2>
            <div className={'table-responsive'}>
                <table className={'table'}>
                    <thead>
                        <tr>
                            <th scope={'col'}> S. no.</th>
                            <th scope={'col'}> Name</th>
                            <th scope={'col'}> Designation</th>
                            <th scope={'col-6'}> Message</th>
                            <th scope={'col'}> Visible</th>
                            <th scope={'col'}> Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTestimony && allTestimony.map((testimoney) => 
                            <tr key={testimoney.id}>
                                <td>{testimoney.id}</td>
                                <td>{testimoney.name}</td>
                                <td>{testimoney.designation}</td>
                                <td>{testimoney.message}</td>
                                <td className={'switches'}>
                                    <div className={'toggle-slider'}>
                                        <input
                                            type="checkbox"
                                            checked={testimoney.showAtTop}
                                            onChange={() => handleToggle(testimoney.id)}
                                            className="slider"
                                            id={`slider-${testimoney.id}`}
                                        />
                                        <label htmlFor={`slider-${testimoney.id}`} className="slider-label">
                                            {testimoney.showAtTop ? "ON" : "OFF"}
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <i className='bx bxs-trash' onClick={() => deleteTestimoney(testimoney.id)}></i>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}