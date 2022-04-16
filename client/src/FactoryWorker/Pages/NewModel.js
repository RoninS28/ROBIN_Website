import React, { useState, useEffect } from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import axios from "axios";

const initialFValues = {
  id: 0,
  name: "",
  managerName: "",
  mobile: "",
  status: "",
  startDate: new Date(),
};

export default function NewModel(props) {
  const { addOrEdit, recordForEdit, setOpenPopup, type } = props;

  const validate = (fieldValues = values) => {
    console.log("Validate called");
    console.log({ fieldValues });
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("managerName" in fieldValues)
      temp.managerName = fieldValues.managerName
        ? ""
        : "This field is required.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("status" in fieldValues)
      temp.status =
        fieldValues.status.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const getDepartmentCollection = () => [
    { id: "0", title: "Stage 1" },
    { id: "1", title: "Stage 2" },
    { id: "2", title: "Stage 3" },
    { id: "3", title: "Stage 4" },
  ];

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const postAModel = async (modelData) => {
    // const {} = modelData;
    console.log({ modelData });

    if (type === "new") {
      axios
        .post("http://localhost:5000/api/factory-worker", { ...modelData })
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          console.log({
            err: err,
          });
        })
        .finally(() => {
          setOpenPopup((prev) => ({ value: false }));
        });
    } else {
      console.log("update operation");
      axios
        .put(`http://localhost:5000/api/factory-worker/${modelData._id}`, {
          ...modelData,
        })
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          console.log({
            err: err,
          });
        });
    }
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(values)) {
      addOrEdit(values, resetForm);
      postAModel({
        _id: values._id,
        name: values.name,
        managerName: values.managerName,
        mobile: values.mobile,
        status: +values.status,
        startDate: values.startDate,
      });
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Model Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />

          <Controls.Input
            label="Manager Name"
            name="managerName"
            value={values.managerName}
            onChange={handleInputChange}
            error={errors.managerName}
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
            options={getDepartmentCollection()}
            error={errors.status}
          />

          <Controls.DatePicker
            label="Start Date"
            name="startDate"
            value={values.startDate}
            onChange={handleInputChange}
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
