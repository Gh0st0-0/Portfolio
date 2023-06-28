import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

export default function EditOtherSkil(){
    const {id} = useParams();

    return (
        <div>
            <h1>
                edit Other skill
            </h1>
        </div>
    )
}