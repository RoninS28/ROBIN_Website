import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls'
import * as Servicedata from './Servicedata'


const initialFValues = {
    id: 0,
    MdName: '',
    MnName: '',
    mobile: '',
    status: '',
    hireDate: new Date(),
    
}

export default function NewModel(props) {
   
    const { addOrEdit, recordForEdit } = props
   
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('MdName' in fieldValues)
            temp.MdName = fieldValues.MdName ? "" : "This field is required."
        if ('MnName' in fieldValues)
        temp.MnName = fieldValues.MnName ? "" : "This field is required."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('status' in fieldValues)
            temp.status = fieldValues.status.length !=0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
    }
    
    const {
         values,
         setValues,
        errors,
         setErrors,
         handleInputChange  ,
         resetForm     
    } = useForm(initialFValues, true, validate);


    const handleSubmit = e => {
         e.preventDefault()
         if (validate()){
            addOrEdit(values, resetForm);
        }
    }
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
    return(
        <Form onSubmit={handleSubmit}>
           <Grid container>
                <Grid item xs={6}>
                <Controls.Input
                        name="MdName"
                        label="Model Name"                       
                        value={values.MdName}
                        onChange={handleInputChange}
                        error={errors.MdName}
                    />
                    
                    <Controls.Input
                        label="Manager Name"
                        name="MnName"                                           
                        value={values.MnName}
                        onChange={handleInputChange}
                        error={errors.MnName}
                    />

                    <Controls.Input
                        label="Mobile"
                        name="mobile"                                           
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                  
                    </Grid>
                    <Grid item xs={6}>
                    <Controls.Select
                        name="status"
                        label="Status"
                        value={values.status}
                        onChange={handleInputChange}
                        options={Servicedata.getDepartmentCollection()}
                        error={errors.status}
                    />

                    <Controls.DatePicker
                        label="Start Date"
                        name="hireDate"                      
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                             />
                    </div>
                    </Grid>
                </Grid> 


         </Form>
    )

}