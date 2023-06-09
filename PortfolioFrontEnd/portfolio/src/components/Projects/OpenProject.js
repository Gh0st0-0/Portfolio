import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';

export default function OpenProject() {
    const {id} = useParams;

    const [porject, setProject] = useState({});

    async function fetchProject() {
        // const {data} = await axios
        // setProject(data);
    }
}