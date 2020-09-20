import styled from "styled-components/macro";
import { TextField, Button } from "@material-ui/core";

// using styled components with structure
const PageRoot = styled.form`
  && {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`;

const FormField = styled(TextField)`
  && {
    margin: 20px 0px;
  }
`;

const FormField3 = styled(FormField)`
  && {
    width: 30%;
  }
`;

const FormRowContainer = styled.div`
  && {
    display: flex;
    justify-content: space-between;

    span {
      margin-left: 20px;
      font-size: 20px;
    }
  }
`;

const BoldLabel = styled.b`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const ActionsContainer = styled.div`
  && {
    display: flex;
    justify-content: flex-end;
    width: 250px;
    margin-right: 20px;
    margin-left: auto;
  }
`;

const LeftButton = styled(Button)`
  && {
    margin-right: 20px;
  }
`;

PageRoot.FormField = FormField;
PageRoot.FormField3 = FormField3;
PageRoot.BoldLabel = BoldLabel;
PageRoot.FormRowContainer = FormRowContainer;
PageRoot.ActionsContainer = ActionsContainer;
PageRoot.ActionsContainer.LeftButton = LeftButton;

export default PageRoot;
