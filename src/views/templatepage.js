import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Layout from "./../Layout";

export default function Dashboard(props) {
  return (
    <Layout>
      <div className="content">
            <Card style={{padding: "15px"}}>
              Dashboard
            </Card>
      </div>
    </Layout>
  );
};
