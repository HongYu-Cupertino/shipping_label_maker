import styled from "styled-components/macro";
import { Stepper } from "@material-ui/core";

// using styled components with structure
const PageRoot = styled.div`
  && {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FormStepper = styled(Stepper)`
  && {
    padding-left: 0px;
  }
`;

const StepContent = styled.div`
  && {
    min-width: 400px;
    min-height: 400px;
  }
`;

PageRoot.Stepper = FormStepper;
PageRoot.StepContent = StepContent;

export default PageRoot;
