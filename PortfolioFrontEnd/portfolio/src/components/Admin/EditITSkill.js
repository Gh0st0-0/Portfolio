import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

export default function EditITSkill() {
    const {id} = useParams();

    return (
        <div>
            <h1>
                edit itSkill
            </h1>
        </div>
    )
}