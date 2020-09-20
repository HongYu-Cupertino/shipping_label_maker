import React from "react";
import { PropTypes } from "prop-types";
import PageRoot from "./step-component-styles";
import usStates from "./us_states.json";
import { MenuItem, Button } from "@material-ui/core";
import { useApp } from "../../appContext";
import { WIZARD_ACTIONS } from "../../constants";

const GetReceiverAddress = (props) => {
  const { onAction, isFirstStep, isLastStep } = props;
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

  const handleClickPrevious = () => {
    onAction(WIZARD_ACTIONS.PREVIOUS);
  };

  const handleClickNext = () => {
    // first check if this is last step, if yes, call onComplete cb in props
    // from parent, if no, move to next step by add activeStep by 1
    updateShippingInfoTo();

    if (isLastStep) {
      onAction(WIZARD_ACTIONS.END);
    } else {
      onAction(WIZARD_ACTIONS.NEXT);
    }
  };

  return (
    <PageRoot onSubmit={handleClickNext}>
      <h2>Enter Receiver's Address</h2>
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

GetReceiverAddress.propTypes = {
  onAction: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
};

export default GetReceiverAddress;
