import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

export default function EditProject(){
    const {id} = useParams();

    return (
        <div>
            <h1>
                edit projects
            </h1>
        </div>
    )
}