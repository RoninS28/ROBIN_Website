import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import { useForm, Form } from "./useForm";

const initialFValues = {
  id: 0,
  fullName: "",
  issues: "",
};

export default function IForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("issues" in fieldValues)
      temp.issues = fieldValues.issues ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const getIssues = () => [
    { id: "0", title: "Battery Not charging" },
    { id: "1", title: "Headlamp not working" },
    { id: "2", title: "Damaged Accessories" },
    { id: "3", title: "Damaged Testing Equipment" },
  ];

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={7}>
          <Controls.Input
            name="fullName"
            label="Model Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.Select
            label="Issues"
            name="issues"
            value={values.issues}
            onChange={handleInputChange}
            options={getIssues()}
            error={errors.issues}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
