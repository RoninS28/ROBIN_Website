import React, { useState } from 'react'
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

export default function NewModel() {
    const {
        values,
        setValues,
        handleInputChange       
    } = useForm(initialFValues);

    
    return(
        <Form>
           <Grid container>
                <Grid item xs={6}>
                <Controls.Input
                        name="MdName"
                        label="Model"                       
                        value={values.MdName}
                        onChange={handleInputChange}
                        
                    />
                    
                    <Controls.Input
                        label="Manager Name"
                        name="MnName"                                           
                        value={values.Mnname}
                        onChange={handleInputChange}
                        
                    />

                    <Controls.Input
                        label="Mobile"
                        name="mobile"                                           
                        value={values.mobile}
                        onChange={handleInputChange}
                        
                    />
                  
                    </Grid>
                    <Grid item xs={6}>
                    <Controls.Select
                        name="status"
                        label="Status"
                        value={values.status}
                        onChange={handleInputChange}
                        options={Servicedata.getDepartmentCollection()}
                      
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
                             />
                    </div>
                    </Grid>
                </Grid> 


         </Form>
    )

}