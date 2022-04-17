// import React from 'react'
import React, { useEffect, useState } from 'react'

import { NavLink, useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    useEffect(() => {
        fetch('factory/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            history.push("factory/homepage", { replace: true });
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