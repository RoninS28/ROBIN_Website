// import React from 'react'
import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        fetch('factory/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate("factory/homepage", { replace: true });
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <div>
            <p className="pt-5">WELCOME</p>
            <h1>We are the Logout</h1>
        </div>
    )
}

export default Logout;