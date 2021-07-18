import React from "react";
import classnames from "classnames";
import Footer from "./../../components/Footer/Footer.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

export default function Login() {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });
  return (
    <div className="wrapper wrapper-full-page">
        <div className="full-page login-page">
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form" onSubmit={(e)=>{e.preventDefault();}}>
              <Card className="card-login card-white">
                <div className="loginscreenlogo">
                  <img
                    alt="..."
                    src="/images/pw-logo-small.png"
                  />
                  </div>
                <CardBody>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": state.emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      onFocus={(e) => setState({ ...state, emailFocus: true })}
                      onBlur={(e) => setState({ ...state, emailFocus: false })}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": state.passFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Enter OTP"
                      type="password"
                      onFocus={(e) => setState({ ...state, passFocus: true })}
                      onBlur={(e) => setState({ ...state, passFocus: false })}
                    />
                  </InputGroup>
                </CardBody>
                <CardFooter>
                  <Button
                    block
                    className="mb-3"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Login
                  </Button>
                  <div className="text-center">
                    <h5 style={{marginBottom: "5px"}}>
                      <a
                        className="footer-link"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Get OTP
                      </a>
                    </h5>
                    <h6>
                        (1:00)
                    </h6>
                  </div>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Container>
      </div>
      <footer className="footer">
      <div className="container-fluid">

        <div className="copyright">
          © {new Date().getFullYear()} {" "}
          <a href="https://www.profitwheel.com/" className="loginfooteranchor" target="_blank">
            ProfitWheel
          </a>{" "}
          Data Technologies Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
    </div>
    </div>
  );
};
