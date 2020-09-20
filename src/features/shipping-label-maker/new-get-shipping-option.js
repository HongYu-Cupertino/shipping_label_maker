import React from "react";
import { PropTypes } from "prop-types";
import BaseStep from "./base-step";
import { useApp } from "../../appContext";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { SHIPPING_OPTIONS } from "../../constants";

const NewGetShippingOption = (props) => {
  const { shippingInfo, setShippingInfo } = useApp();
  const [shippingOption, setShippingOption] = React.useState(
    shippingInfo.shippingOption
      ? shippingInfo.shippingOption
      : SHIPPING_OPTIONS.GROUND
  );

  const handleChange = (evt) => {
    setShippingOption(evt.target.value);
  };

  const updateShippingInfo = () => {
    setShippingInfo({ ...shippingInfo, shippingOption });
  };

  return (
    <BaseStep {...props} updateShippingInfo={updateShippingInfo}>
      <h2>Select Shipping Option(New)</h2>
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
    </BaseStep>
  );
};

NewGetShippingOption.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default NewGetShippingOption;
