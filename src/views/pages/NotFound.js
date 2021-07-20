
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import { useHistory } from 'react-router-dom';

export default function NotFround(props) {
    let history = useHistory();
  return (
    <div className="full-page">
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Card className="card-lock card-white text-center">
              <CardHeader>
              </CardHeader>
              <CardBody>
              <div><h2 style={{color:"#575757",marginBottom:"0"}}>Page not found...</h2></div>
              </CardBody>
              <CardFooter>
                <Button
                //   className="btn-round"
                  color="info"
                  size="sm"
                  onClick={(e) => {e.preventDefault(); history.push('/dashboard');}}
                >
                  Back to Dashboard
                </Button>
              </CardFooter>
            </Card>
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
  );
};
