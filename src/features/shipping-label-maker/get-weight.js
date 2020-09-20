import React from "react";
import { PropTypes } from "prop-types";
import PageRoot from "./step-component-styles";
import { Button } from "@material-ui/core";
import { useApp } from "../../appContext";
import { WIZARD_ACTIONS } from "../../constants";

const GetWeight = (props) => {
  const { onAction, isFirstStep, isLastStep } = props;
  const { shippingInfo, setShippingInfo } = useApp();
  const [weight, setWeight] = React.useState(
    shippingInfo.weight ? shippingInfo.weight : 1
  );

  const handleChange = (evt) => {
    setWeight(evt.target.value);
  };

  const handleClickPrevious = () => {
    onAction(WIZARD_ACTIONS.PREVIOUS);
  };

  const handleClickNext = () => {
    // first check if this is last step, if yes, call onComplete cb in props
    // from parent, if no, move to next step by add activeStep by 1
    setShippingInfo({ ...shippingInfo, weight });

    if (isLastStep) {
      onAction(WIZARD_ACTIONS.END);
    } else {
      onAction(WIZARD_ACTIONS.NEXT);
    }
  };

  return (
    <PageRoot onSubmit={handleClickNext}>
      <h2>Enter Weight</h2>
      <PageRoot.FormField
        type="number"
        name="weight"
        label="Weight (lb)"
        placeholder="Weight"
        variant="outlined"
        size="small"
        required
        inputProps={{ min: "1" }}
        InputLabelProps={{
          shrink: true,
        }}
        value={weight}
        onChange={handleChange}
      ></PageRoot.FormField>
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

GetWeight.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default GetWeight;
