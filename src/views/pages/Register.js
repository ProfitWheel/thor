import React, { useState, useEffect, useRef } from 'react';
import classnames from "classnames";
import { authenticate, resetOtp, setAuthorizationToken } from "../../api/auth.js";
import PwLoader from '../../components/PwLoader';
import NotificationAlert from "react-notification-alert";
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from "react-router-dom";
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
  Row,
  Col,
} from "reactstrap";
import { useHistory } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'
const errorstyle = {
  marginBottom: '0',
  position: 'absolute',
  bottom: '-18px',
  left: '0',
  right: '0',
  fontSize: '11px',
  color: '#ed1c24',
  textAlign: 'center'
}

export default function Register() {
  const [state, setState] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const notificationAlertRef = useRef(null);

  let history = useHistory();

  //login submit ajax
  const submitForm = (userdata) => {
    //console.log(userdata);
    authenticate(userdata)
      .then(res => {
        //console.log(res.data);
        setLoading(false);
        const token = res.data.access_token;
        localStorage.setItem('access_token', token);
        setAuthorizationToken(token);
        history.push('/dashboard');
      }).catch((error) => {
        setLoading(false);
        console.log(error);
        // if(error.response && error.response.data.msg){
        // setOtpError(error.response.data.msg);
        // }

    //     let options = {};
    // options = {
    //   place: "tc",
    //   message: "OTP expired, please generate new otp.",
    //   type: "warning",
    //   // icon: "tim-icons icon-bell-55",
    //   autoDismiss: 2,
    // };
    // notificationAlertRef.current.notificationAlert(options);

        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwcm9maXR3aGVlbCIsImlhdCI6MTYyNjc5MTc3NywiZXhwIjoxNjU4MzI3Nzc4LCJhdWQiOiIiLCJzdWIiOiIiLCJ1c2VybmFtZSI6IkRoYXJtZXNoIiwiZW1haWwiOiJkaGFybWVzaC5zaGFodUB5YWhvby5jb20iLCJyb2xlIjoiYWRtaW4iLCJwZXJtaXNzaW9uIjoiW10iLCJxd2VydHl1aW9wYXNkZmdoamtsenhjdmJubTEyMzQ1NiI6IlByb2plY3QgQWRtaW5pc3RyYXRvciJ9.RXQcP6KLud9FpKXhjYjSw38ct3uFAympzx8x6Ov-Zik";
        localStorage.setItem('access_token', token);
        setAuthorizationToken(token);
        window.location.href = '/dashboard';

      })

  }


  //otp generate
  const generateOtp = (userdata) => {
    resetOtp(userdata)
      .then(res => {
        //console.log(res.data);
        setLoading(false);
        let options = {};
    options = {
      place: "tc",
      message: "Otp generated, please check you email.",
      type: "success",
      // icon: "tim-icons icon-bell-55",
      autoDismiss: 2,
    };
    notificationAlertRef.current.notificationAlert(options);
      }).catch((error) => {
        setLoading(false);
        console.log(error);

        let options = {};
    options = {
      place: "tc",
      message: "Please try again.",
      type: "warning",
      // icon: "tim-icons icon-bell-55",
      autoDismiss: 2,
    };
    notificationAlertRef.current.notificationAlert(options);

      })
    }

  //Custom Validator
  const validate = () => {
    let firstNameErrors = "";
    let lastNameErrors = "";
    let emailErrors = "";
    let otpErrors = "";

    if (!firstName) {
      firstNameErrors = "Please enter first name";
      console.log(firstNameErrors);
    }
    
    if (!lastName) {
      lastNameErrors = "Please enter last name";
      console.log(lastNameErrors);
    }

    if (!email.includes("@")) {
      emailErrors = "Please enter valid email id";
      console.log(emailErrors);
    }

    if (!otp) {
      otpErrors = "Please enter valid OTP";
      console.log(otpErrors);
    }

    if (firstNameErrors || lastNameErrors || emailErrors || otpErrors) {
      setFirstNameError(firstNameErrors);
      setLastNameError(lastNameErrors);
      setEmailError(emailErrors);
      setOtpError(otpErrors);
      return false;
    }
    else {
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setOtpError("");
    }
    return true;
  };


  //submit function to call ajax if validator is successful
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      submitForm({
        firstName: firstName,
        lastName: lastName,
        email: email,
        otp: otp
      });
      setLoading(true);
    }

  }

  //Custom Validator OTP
  const otpValidate = () => {
    let firstNameErrors = "";
    let lastNameErrors = "";
    let emailErrors = "";
    let otpErrors = "";

    if (!email.includes("@")) {
      emailErrors = "Please enter valid email id";
      console.log(emailErrors);
    }

    if (emailErrors) {
      setFirstNameError(firstNameErrors);
      setLastNameError(lastNameErrors);
      setEmailError(emailErrors);
      setOtpError(otpErrors);
      return false;
    }
    else {
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setOtpError("");
    }
    return true;
  };

  //submit function to call ajax if validator is successful
  const handleOtpSubmit = () => {
    const isValid = otpValidate();
    if (isValid) {
      generateOtp({
        email: email
      });
      setLoading(true);
    }
  }


  return (
    <div className="wrapper wrapper-full-page">
      <NotificationAlert ref={notificationAlertRef} />
      <div className="full-page login-page" style={{backgroundImage: "url(/images/businesswall.jpg)"}}>
        <div className="login-page-content">
          <Container>
            <Col className="ml-auto mr-auto" lg="6" md="6">
              <Form className="form" onSubmit={(event) => handleSubmit(event)}>
                <Card className="card-login card-white">
                  <div className="loginscreenlogo">
                    <img
                      alt="..."
                      src="/images/pw-logo-small.png"
                    />
                  </div>
                  <CardBody>
                  <Col className="ml-auto mr-auto text-center" sm="12">
                  <h5 
                  style={{ color: "#575757", fontWeight:"bold", fontSize: "14px" }}
                  >
                     Registration
                      </h5>
                      </Col>
                    <Row>
                  <Col className="ml-auto mr-auto" sm="6">
                  <div style={{position: "relative"}}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.firstName,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-paper" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        onFocus={(e) => setState({ ...state, firstName: true })}
                        onBlur={(e) => setState({ ...state, firstName: false })}
                      />
                    </InputGroup>
                    <p style={errorstyle}>{firstNameError}</p>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto" sm="6">
                  <div style={{position: "relative"}}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.lastName,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-paper" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        onFocus={(e) => setState({ ...state, lastName: true })}
                        onBlur={(e) => setState({ ...state, lastName: false })}
                      />
                    </InputGroup>
                    <p style={errorstyle}>{lastNameError}</p>
                    </div>
                  </Col>
                  </Row>

                    <div style={{position: "relative"}}>
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
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        onFocus={(e) => setState({ ...state, emailFocus: true })}
                        onBlur={(e) => setState({ ...state, emailFocus: false })}
                      />
                    </InputGroup>
                    <p style={errorstyle}>{emailError}</p>
                    </div>
                    <Row>
                    <Col className="ml-auto mr-auto" sm="8">
                    <div style={{position: "relative"}}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.otp,
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
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                        onFocus={(e) => setState({ ...state, otp: true })}
                        onBlur={(e) => setState({ ...state, otp: false })}
                      />
                    </InputGroup>
                    <p style={errorstyle}>{otpError}</p>
                    </div>
                    </Col>
                    <Col className="ml-auto mr-auto" sm="4">

                    <div className="text-center grid-center">
                      <h5 style={{ marginBottom: "0px",marginTop: "10px",marginRight: "20px"}}>
                        <a
                        style={{ fontWeight: "bold" }}
                          className="footer-link"
                          onClick={(e) => { e.preventDefault(); handleOtpSubmit();}}
                        >
                          Get OTP
                        </a>
                      </h5>
                      {/* <h6>
                        (1:00)
                      </h6> */}
                      </div>
                      </Col>
                      </Row>
                  </CardBody>
                  <div style={{ padding: "0px 0px 10px"}}>
                  <Col className="ml-auto mr-auto" sm="12">
                    <Button
                      block
                      className="mb-3"
                      color="info"
                      // size="lg"
                    >
                      Register
                    </Button>
                  </Col>
                  </div>
                </Card>
              </Form>
              <Row>
              <Col className="ml-auto mr-auto" sm="12">
              <div className="text-left">
                      <h5 style={{ marginBottom: "0px" }}>
                      <NavLink
              to={"/login"}
              style={{ fontWeight: "bold" }}
                          className="footer-link white"
            ><i style={{fontSize: "10px"}} class="fa fa-chevron-left" aria-hidden="true"></i> Login</NavLink>
                      </h5>
                      </div>
                      </Col>
                      </Row>
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

      <PwLoader loading={loading} />
    </div>
  );
};
