import React from "react";
import { PropTypes } from "prop-types";
import PageRoot from "./step-component-styles";
import { Button } from "@material-ui/core";
import { useApp } from "../../appContext";
import {
  SHIPPING_RATE,
  SHIPPING_OPTIONS,
  WIZARD_ACTIONS,
} from "../../constants";

const Confirmation = (props) => {
  const { onAction, isFirstStep, isLastStep } = props;
  const { shippingInfo } = useApp();

  const shippingCost =
    shippingInfo.weight *
    SHIPPING_RATE *
    (shippingInfo.shippingOption === SHIPPING_OPTIONS.GROUND ? 1 : 1.5);

  const handleClickPrevious = () => {
    onAction(WIZARD_ACTIONS.PREVIOUS);
  };

  const handleClickNext = () => {
    // first check if this is last step, if yes, call onComplete cb in props
    // from parent, if no, move to next step by add activeStep by 1
    if (isLastStep) {
      onAction(WIZARD_ACTIONS.END);
    } else {
      onAction(WIZARD_ACTIONS.NEXT);
    }
  };

  return (
    <PageRoot onSubmit={handleClickNext}>
      <h2>Confirmation</h2>
      <PageRoot.BoldLabel>From:</PageRoot.BoldLabel>
      <PageRoot.FormRowContainer>
        <span>{shippingInfo.from.name}</span>
      </PageRoot.FormRowContainer>
      <PageRoot.FormRowContainer>
        <span>{shippingInfo.from.street}</span>
      </PageRoot.FormRowContainer>
      <PageRoot.FormRowContainer>
        <span>
          {`${shippingInfo.from.city}, ${shippingInfo.from.state} ${shippingInfo.from.zip}`}
        </span>
      </PageRoot.FormRowContainer>
      <PageRoot.BoldLabel>To:</PageRoot.BoldLabel>
      <PageRoot.FormRowContainer>
        <span>{shippingInfo.to.name}</span>
      </PageRoot.FormRowContainer>
      <PageRoot.FormRowContainer>
        <span>{shippingInfo.to.street}</span>
      </PageRoot.FormRowContainer>
      <PageRoot.FormRowContainer>
        <span>
          {`${shippingInfo.to.city}, ${shippingInfo.to.state} ${shippingInfo.to.zip}`}
        </span>
      </PageRoot.FormRowContainer>
      <PageRoot.BoldLabel>{`Weight: ${shippingInfo.weight}`}</PageRoot.BoldLabel>
      <PageRoot.BoldLabel>
        {`Shipping Option: ${
          shippingInfo.shippingOption === SHIPPING_OPTIONS.GROUND
            ? "Ground"
            : "Priority"
        }`}
      </PageRoot.BoldLabel>
      <PageRoot.BoldLabel>{`Shipping Cost: $${shippingCost.toFixed(
        2
      )}`}</PageRoot.BoldLabel>
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

Confirmation.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default Confirmation;
