export const SHIPPING_RATE = 0.4;
export const SHIPPING_OPTIONS = {
  GROUND: "1",
  PRIORITY: "2",
};
export const WIZARD_HEADER = "Shipping Label Maker";

// all the step components listed here, with an assigned number
export const WIZARD_STEPS = {
  GET_SENDER_ADDRESS_COMPONENT: 1,
  GET_RECEIVER_ADDRESS_COMPONENT: 2,
  GET_WEIGHT_COMPONENT: 3,
  GET_SHIPPING_OPTION_COMPONENT: 4,
  CONFIRMATION_COMPONENT: 5,
};

// wizard actions
export const WIZARD_ACTIONS = {
  PREVIOUS: 1,
  NEXT: 2,
  END: 3,
};
