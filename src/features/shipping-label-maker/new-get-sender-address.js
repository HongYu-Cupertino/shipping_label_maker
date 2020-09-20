import React from "react";
import { PropTypes } from "prop-types";
import { MenuItem } from "@material-ui/core";
import BaseStep from "./base-step";
import usStates from "./us_states.json";
import { useApp } from "../../appContext";
import PageRoot from "./step-component-styles";

const NewGetSenderAddress = (props) => {
  const { shippingInfo, setShippingInfo } = useApp();

  // define custom hook to clean the code for duplicate handlers
  const useFormInput = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };

  const senderName = useFormInput(
    shippingInfo.from && shippingInfo.from.name ? shippingInfo.from.name : ""
  );
  const senderStreet = useFormInput(
    shippingInfo.from && shippingInfo.from.street
      ? shippingInfo.from.street
      : ""
  );
  const senderCity = useFormInput(
    shippingInfo.from && shippingInfo.from.city ? shippingInfo.from.city : ""
  );
  const senderState = useFormInput(
    shippingInfo.from && shippingInfo.from.state
      ? shippingInfo.from.state
      : usStates[0].abbreviation
  );
  const senderZip = useFormInput(
    shippingInfo.from && shippingInfo.from.zip ? shippingInfo.from.zip : ""
  );

  const updateShippingInforFrom = () => {
    const newFrom = {
      name: senderName.value,
      street: senderStreet.value,
      city: senderCity.value,
      state: senderState.value,
      zip: senderZip.value,
    };

    // replace shippingInfo.from with new one
    setShippingInfo({ ...shippingInfo, from: newFrom });
  };

  return (
    <BaseStep {...props} updateShippingInfo={updateShippingInforFrom}>
      <h2>Enter Sender's Address(new)</h2>
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
        value={senderName.value}
        onChange={senderName.onChange}
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
        value={senderStreet.value}
        onChange={senderStreet.onChange}
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
          value={senderCity.value}
          onChange={senderCity.onChange}
        ></PageRoot.FormField3>
        <PageRoot.FormField3
          select
          name="state"
          label="State"
          value={senderState.value}
          onChange={senderState.onChange}
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
          value={senderZip.value}
          onChange={senderZip.onChange}
        ></PageRoot.FormField3>
      </PageRoot.FormRowContainer>
    </BaseStep>
  );
};

NewGetSenderAddress.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default NewGetSenderAddress;
