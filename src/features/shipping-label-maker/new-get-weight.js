import React from "react";
import { PropTypes } from "prop-types";
import BaseStep from "./base-step";
import { useApp } from "../../appContext";
import PageRoot from "./step-component-styles";

const NewGetWeight = (props) => {
  const { shippingInfo, setShippingInfo } = useApp();
  const [weight, setWeight] = React.useState(
    shippingInfo.weight ? shippingInfo.weight : 1
  );

  const handleChange = (evt) => {
    setWeight(evt.target.value);
  };

  const updateShippingInfo = () => {
    setShippingInfo({ ...shippingInfo, weight });
  };

  return (
    <BaseStep {...props} updateShippingInfo={updateShippingInfo}>
      <h2>Enter Weight(New)</h2>
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
    </BaseStep>
  );
};

NewGetWeight.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default NewGetWeight;
