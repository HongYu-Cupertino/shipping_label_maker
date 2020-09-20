import React from "react";
import { PropTypes } from "prop-types";
import PageRoot from "./step-component-styles";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import { useApp } from "../../appContext";
import { WIZARD_ACTIONS, SHIPPING_OPTIONS } from "../../constants";

const GetShippingOption = (props) => {
  const { onAction, isFirstStep, isLastStep } = props;
  const { shippingInfo, setShippingInfo } = useApp();
  const [shippingOption, setShippingOption] = React.useState(
    shippingInfo.shippingOption
      ? shippingInfo.shippingOption
      : SHIPPING_OPTIONS.GROUND
  );

  const handleChange = (evt) => {
    setShippingOption(evt.target.value);
  };

  const handleClickPrevious = () => {
    onAction(WIZARD_ACTIONS.PREVIOUS);
  };

  const handleClickNext = () => {
    // first check if this is last step, if yes, call onComplete cb in props
    // from parent, if no, move to next step by add activeStep by 1
    setShippingInfo({ ...shippingInfo, shippingOption });

    if (isLastStep) {
      onAction(WIZARD_ACTIONS.END);
    } else {
      onAction(WIZARD_ACTIONS.NEXT);
    }
  };

  return (
    <PageRoot onSubmit={handleClickNext}>
      <h2>Select Shipping Option</h2>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Shipping Option</FormLabel> */}
        <RadioGroup
          name="shippingOption"
          value={shippingOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value={SHIPPING_OPTIONS.GROUND}
            control={<Radio />}
            label="Ground"
          />
          <FormControlLabel
            value={SHIPPING_OPTIONS.PRIORITY}
            control={<Radio />}
            label="Priority"
          />
        </RadioGroup>
      </FormControl>
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

GetShippingOption.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default GetShippingOption;
