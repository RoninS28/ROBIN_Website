import React from 'react'
import "./WorkerList.css"
import WorkerListDetail from './WorkerListDetail'
import workers from './Workers'

function WorkerList() {
    return (
        <div className="container-worker">

            
        
            <div className="worker-list">
                
            <WorkerListDetail id="ID" name="Name" phone="Phone" position="Position" email="Email" address="Address" salary="Salary" Position="Position" />
            {workers.map((worker)=>(
                <WorkerListDetail key={worker.id} id={worker.id} name={worker.name} address={worker.address} email={worker.email} position={worker.position} phone={worker.phone} salary={worker.salary}/>
            ))}  
            </div>

        </div>
    )
}

export default WorkerList
