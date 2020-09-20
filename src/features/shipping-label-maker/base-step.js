import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@material-ui/core";
import PageRoot from "./step-component-styles";
import { WIZARD_ACTIONS } from "../../constants";

const BaseStep = (props) => {
  const { onAction, isFirstStep, isLastStep } = props;

  const handleClickPrevious = () => {
    onAction(WIZARD_ACTIONS.PREVIOUS);
  };

  const handleClickNext = () => {
    // first check if this is last step, if yes, call onComplete cb in props
    // from parent, if no, move to next step by add activeStep by 1
    props.updateShippingInfo();

    if (isLastStep) {
      onAction(WIZARD_ACTIONS.END);
    } else {
      onAction(WIZARD_ACTIONS.NEXT);
    }
  };

  return (
    <PageRoot onSubmit={handleClickNext}>
      {props.children}
      <PageRoot.ActionsContainer>
        {!isFirstStep && (
          <PageRoot.ActionsContainer.LeftButton
            variant="contained"
            color="primary"
            onClick={handleClickPrevious}
          >
            Previous
          </PageRoot.ActionsContainer.LeftButton>
        )}
        <Button type="submit" variant="contained" color="primary">
          {isLastStep ? "End" : "Next"}
        </Button>
      </PageRoot.ActionsContainer>
    </PageRoot>
  );
};

BaseStep.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  updateShippingInfo: PropTypes.func,
};

BaseStep.defaultProps = {
  updateShippingInfo: () => null,
};

export default BaseStep;
