import React from "react";
import { useApp } from "../../appContext";
import { SHIPPING_RATE, SHIPPING_OPTIONS } from "../../constants";
import PageRoot from "./step-component-styles";
import { Button } from "@material-ui/core";

const ShippingLabel = () => {
  const { shippingInfo, setIsAuthenticated } = useApp();

  const shippingCost =
    shippingInfo.weight *
    SHIPPING_RATE *
    (shippingInfo.shippingOption === SHIPPING_OPTIONS.GROUND ? 1 : 1.5);

  const handlePrint = () => {
    const w = window.open();
    const content = document.getElementById("printableArea").innerHTML;
    w.document.write(content);
    w.print();
    w.close();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <PageRoot>
      <div id="printableArea">
        <PageRoot.FormRowContainer>
          <PageRoot.BoldLabel>From:</PageRoot.BoldLabel>
        </PageRoot.FormRowContainer>
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
        <PageRoot.FormRowContainer>
          <PageRoot.BoldLabel>To:</PageRoot.BoldLabel>
        </PageRoot.FormRowContainer>
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
        <PageRoot.FormRowContainer>
          <PageRoot.BoldLabel>{`Weight: ${shippingInfo.weight}`}</PageRoot.BoldLabel>
        </PageRoot.FormRowContainer>
        <PageRoot.FormRowContainer>
          <PageRoot.BoldLabel>
            {`Shipping Option: ${
              shippingInfo.shippingOption === 1 ? "Ground" : "Priority"
            }`}
          </PageRoot.BoldLabel>
        </PageRoot.FormRowContainer>

        <PageRoot.FormRowContainer>
          <PageRoot.BoldLabel>{`Shipping Cost: $${shippingCost.toFixed(
            2
          )}`}</PageRoot.BoldLabel>
        </PageRoot.FormRowContainer>
      </div>
      <PageRoot.ActionsContainer>
        <PageRoot.ActionsContainer.LeftButton
          variant="contained"
          color="primary"
          onClick={handleLogout}
        >
          Logout
        </PageRoot.ActionsContainer.LeftButton>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print
        </Button>
      </PageRoot.ActionsContainer>
    </PageRoot>
  );
};

export default ShippingLabel;
