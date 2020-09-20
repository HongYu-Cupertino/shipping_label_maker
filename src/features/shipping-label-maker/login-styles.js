import styled from "styled-components/macro";
import { Paper, Typography, TextField, Button } from "@material-ui/core";

// using styled components with structure
const LoginRoot = styled(Paper)`
  && {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -400px;
    margin-left: -400px;
    width: 400px;
    height: 400px;
  }
`;

const Form = styled.form`
  && {
    display: flex;
    flex-direction: column;
    margin: 40px 30px;
  }
`;

const FormField = styled(TextField)`
  && {
    margin: 20px 0px;
  }
`;

const FormButton = styled(Button)`
  && {
    width: 100px;
    margin-left: auto;
  }
`;

const FormTypography = styled(Typography)`
  && {
    margin-top: 10px;
  }
`;

LoginRoot.Form = Form;
LoginRoot.Form.FormField = FormField;
LoginRoot.Form.FormButton = FormButton;
LoginRoot.Form.FormTypography = FormTypography;

export default LoginRoot;
