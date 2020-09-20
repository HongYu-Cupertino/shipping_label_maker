import React from "react";
import PageRoot from "./shipping-label-maker-styles";
import Wizard from "../../core/components/wizard/wizard";
import ShippingLabel from "./shipping-label";
import { WIZARD_HEADER } from "../../constants";
// import GetSenderAddress from "./get-sender-address";
// import GetReceiverAddress from "./get-receiver-address";
// import GetWeight from "./get-weight";
// import GetShippingOption from "./get-shipping-option";
// import Confirmation from "./confirmation";
import NewGetSenderAddress from "./new-get-sender-address";
import NewGetReceiverAddress from "./new-get-receiver-address";
import NewGetWeight from "./new-get-weight";
import NewGetShippingOption from "./new-get-shipping-option";
import NewConfirmation from "./new-confirmation";

// const wizardSteps = [
//     { name: "Get Sender Address", component: GetSenderAddress },
//     { name: "Get Receiver Address", component: GetShippingOption },
//     { name: "Get Weight", component: GetWeight },
//     { name: "Get Shipping Option", component: GetShippingOption },
//     { name: "Confirm", component: Confirmation },
//   ];

const wizardSteps = [
  { name: "Get Sender Address", component: NewGetSenderAddress },
  { name: "Get Receiver Address", component: NewGetReceiverAddress },
  { name: "Get Weight", component: NewGetWeight },
  { name: "Get Shipping Option", component: NewGetShippingOption },
  { name: "Confirm", component: NewConfirmation },
];

const ShippinglabelMaker = () => {
  const [wizardComplete, setWizardComplete] = React.useState(false);

  const onComplete = () => {
    // will be called by wizrd to indicate the steps are all done. ready to print shipping label
    setWizardComplete(true);
  };

  return (
    <PageRoot>
      {!wizardComplete && (
        <Wizard
          header={WIZARD_HEADER}
          steps={wizardSteps}
          onComplete={onComplete}
        />
      )}
      {wizardComplete && <ShippingLabel />}
    </PageRoot>
  );
};

export default ShippinglabelMaker;
