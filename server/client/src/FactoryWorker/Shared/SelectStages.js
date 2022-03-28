import React from 'react'
import './img/stages.css';


function SelectStages()
{
    return(
        <div >
            <label>
            {/* style={{width: '200px', height: '50px', fontSize:'15px'} */}
            <select style={{width: '200px', height: '50px', fontSize:'15px'}}>
                <option>Stage I</option>
                <option>Stage II</option>
                <option>Stage III</option>
                <option>Stage IV</option>
                <option>Stage V</option>
                <option>Stage VI</option>
                <option>Stage VII</option>
               
            </select>
            </label>
         
        </div>
    );
}

export default SelectStages;
