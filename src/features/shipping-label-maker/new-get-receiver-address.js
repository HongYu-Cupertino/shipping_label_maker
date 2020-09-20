import React from "react";
import { PropTypes } from "prop-types";
import { MenuItem } from "@material-ui/core";
import BaseStep from "./base-step";
import usStates from "./us_states.json";
import { useApp } from "../../appContext";
import PageRoot from "./step-component-styles";

const NewGetReceiverAddress = (props) => {
  const { shippingInfo, setShippingInfo } = useApp();

  // define custom hook to clean the code for duplicate handlers
  const useFormInput = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (e) => {
      setValue(e.target.value);
      // update shippingInfo to property immediately
      updateShippingInfoTo(e.target.name, e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };

  const receiverName = useFormInput(
    shippingInfo.to && shippingInfo.to.name ? shippingInfo.to.name : ""
  );
  const receiverStreet = useFormInput(
    shippingInfo.to && shippingInfo.to.street ? shippingInfo.to.street : ""
  );
  const receiverCity = useFormInput(
    shippingInfo.to && shippingInfo.to.city ? shippingInfo.to.city : ""
  );
  const receiverState = useFormInput(
    shippingInfo.to && shippingInfo.to.state
      ? shippingInfo.to.state
      : usStates[0].abbreviation
  );
  const receiverZip = useFormInput(
    shippingInfo.to && shippingInfo.to.zip ? shippingInfo.to.zip : ""
  );

  const updateShippingInfoTo = () => {
    const newTo = {
      name: receiverName.value,
      street: receiverStreet.value,
      city: receiverCity.value,
      state: receiverState.value,
      zip: receiverZip.value,
    };

    // replace shippingInfo.from with new one
    setShippingInfo({ ...shippingInfo, to: newTo });
  };

  return (
    <BaseStep {...props} updateShippingInfo={updateShippingInfoTo}>
      <h2>Enter Receiver's Address(New)</h2>
      <PageRoot.FormField
        type="input"
        name="name"
        label="Name"
        placeholder="Name"
        variant="outlined"
        size="small"
        required
        InputLabelProps={{
          shrink: true,
        }}
        value={receiverName.value}
        onChange={receiverName.onChange}
      ></PageRoot.FormField>
      <PageRoot.FormField
        type="input"
        name="street"
        label="Street"
        placeholder="Street"
        variant="outlined"
        size="small"
        required
        InputLabelProps={{
          shrink: true,
        }}
        value={receiverStreet.value}
        onChange={receiverStreet.onChange}
      ></PageRoot.FormField>
      <PageRoot.FormRowContainer>
        <PageRoot.FormField3
          type="input"
          name="city"
          label="City"
          placeholder="City"
          variant="outlined"
          size="small"
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={receiverCity.value}
          onChange={receiverCity.onChange}
        ></PageRoot.FormField3>
        <PageRoot.FormField3
          select
          name="state"
          label="State"
          value={receiverState.value}
          onChange={receiverState.onChange}
          variant="outlined"
          size="small"
          required
          InputLabelProps={{
            shrink: true,
          }}
        >
          {usStates.map((state) => (
            <MenuItem key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </MenuItem>
          ))}
        </PageRoot.FormField3>
        <PageRoot.FormField3
          type="input"
          name="zip"
          label="Zip"
          placeholder="Zip"
          variant="outlined"
          size="small"
          required
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ pattern: "\\d{5}([-]\\d{4})?" }}
          value={receiverZip.value}
          onChange={receiverZip.onChange}
        ></PageRoot.FormField3>
      </PageRoot.FormRowContainer>
    </BaseStep>
  );
};

NewGetReceiverAddress.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default NewGetReceiverAddress;
