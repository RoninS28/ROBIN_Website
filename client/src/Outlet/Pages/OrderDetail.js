import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import scooter1 from "../../images/scooter1.jpeg";
import { Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Typography from "@material-ui/core/Typography";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneIcon from "@material-ui/icons/Done";
import Done from "@material-ui/icons/Done";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const steps = [
  "Deformation",
  "Casting",
  "Polymer process",
  "Machining",
  "Finishing",
];

const styles = makeStyles((theme) => ({
  modelDetail: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  modelImage: {
    height: 320,
    width: 320,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  modelInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modelSteps: {
    marginTop: "5vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  stepDescription: {
    marginTop: "5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5vh",
  },

  workerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function OrderDetail(props) {
  const classes = styles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div>
      <div className={classes.modelDetail}>
        <div className={classes.modelInfo}>
          <div>
            <h1 style={{ color: "red" }}>CITY ELECTRIC SCOOTER</h1>
          </div>

          <div style={{ marginLeft: "0vw" }}>
            <img src={scooter1} className="modelImage" alt="EV" />
          </div>

          <div>
            <h3>Ticket ID: C2K18192222</h3>
          </div>
        </div>

        <div className={classes.description}>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Current Stage</span>: Machining
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Stock</span>: 20
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Model</span>: City Electric
              Scooter
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Variant</span>: Top-End Model
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Color</span>: Red
            </h2>
          </div>
          <div>
            <h2>
              <span style={{ color: "blue" }}>Price of each EV</span>: 20,000/-
            </h2>
          </div>
          <div>
            <Button variant="contained" color="primary">
              <CallIcon /> Outlet
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "2vh" }}
            >
              <MailOutlineIcon /> Outlet
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.modelSteps}>
        <Box sx={{ width: "80%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>

        <div>
          <Button variant="contained" color="secondary">
            Update Status
          </Button>
        </div>
      </div>

      <div className={classes.stepDescription}>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Deformation
              </Typography>
              <Typography
                style={{ position: "relative", right: "0", color: "green" }}
              >
                <DoneIcon />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Casting
              </Typography>
              <Typography
                style={{ position: "relative", right: "0", color: "green" }}
              >
                <DoneIcon />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Polymer Process
              </Typography>
              <Typography
                style={{ position: "relative", right: "0", color: "green" }}
              >
                <DoneIcon />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Machining
              </Typography>
              <Typography
                style={{ position: "relative", right: "0", color: "red" }}
              >
                <AccessTimeIcon />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Finishing
              </Typography>
              <Typography
                style={{ position: "relative", right: "0", color: "red" }}
              >
                <AccessTimeIcon />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className={classes.workerInfo}>
        <div>
          <h2>
            <span style={{ color: "blue" }}>Batch Supervisior</span>: Sandesh
            Mahajan
          </h2>
        </div>
        <div>
          <h2>
            <span style={{ color: "blue" }}>Contact</span>: +91 9999999999
          </h2>
        </div>
        <div>
          <Button variant="contained" color="primary">
            <CallIcon /> Supervisior
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "2vh" }}
          >
            <MailOutlineIcon /> Supervisior
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(OrderDetail);
