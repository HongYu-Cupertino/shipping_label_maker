import React from "react";
import { PropTypes } from "prop-types";
import PageRoot from "./wizard-styles";
import { Step, StepLabel } from "@material-ui/core";
import { WIZARD_ACTIONS } from "../../../constants";

const Wizard = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const isLastStep = activeStep === props.steps.length - 1;
  const isFirstStep = activeStep === 0;

  const stepActionCallback = (stepAction) => {
    // base on action to process
    if (stepAction === WIZARD_ACTIONS.PREVIOUS) {
      setActiveStep((activeStep) => activeStep - 1);
    } else if (stepAction === WIZARD_ACTIONS.NEXT) {
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      props.onComplete();
    }
  };

  const CurrentStep = props.steps[activeStep].component;

  return (
    <PageRoot>
      <h1>{props.header}</h1>
      <PageRoot.Stepper activeStep={activeStep} alternativeLabel>
        {props.steps.map((step) => (
          <Step key={step.name}>
            <StepLabel>{step.name}</StepLabel>
          </Step>
        ))}
      </PageRoot.Stepper>
      <PageRoot.StepContent>
        <CurrentStep
          onAction={stepActionCallback}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
        />
      </PageRoot.StepContent>
    </PageRoot>
  );
};

Wizard.propTypes = {
  header: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  // wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Wizard;
