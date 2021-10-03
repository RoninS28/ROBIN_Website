import React from 'react'
import "./WorkerListDetail.css";

function WorkerListDetail({id,name,phone,address,email,position,salary}) {
    return (
        <div className="worker">

            <div className="cell">{id}</div>
            <div className="cell">{name}</div>
            <div className="cell">{phone}</div>
            <div className="cell">{address}</div>
            <div className="cell">{email}</div>
            <div className="cell">{position}</div>
            <div className="cell">{salary}</div>
        </div>
    )
}

export default WorkerListDetail
