import React from "react";
import { PropTypes } from "prop-types";
import BaseStep from "./base-step";
import PageRoot from "./step-component-styles";
import { useApp } from "../../appContext";
import { SHIPPING_RATE, SHIPPING_OPTIONS } from "../../constants";

const NewConfirmation = (props) => {
  const { shippingInfo } = useApp();

  const shippingCost =
    shippingInfo.weight *
    SHIPPING_RATE *
    (shippingInfo.shippingOption === SHIPPING_OPTIONS.GROUND ? 1 : 1.5);

  return (
    <BaseStep {...props}>
      <h2>Confirmation(New)</h2>
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
    </BaseStep>
  );
};

NewConfirmation.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default NewConfirmation;
