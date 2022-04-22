import React from "react";
import IForm from "./Iform";
import PageHeader from "./PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Page() {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Issues"
        subTitle="In factory"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <IForm />
      </Paper>
    </>
  );
}
