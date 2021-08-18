import React, { useEffect, useState } from "react";

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

import Layout from "../../Layout";
import MUIDataTable from "mui-datatables";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';


import {Button as MuiButton} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const getMuiTheme = () => createTheme({
  overrides: {
    typography: {
      // Tell Material-UI what's the font-size on the html element is.
      htmlFontSize: 10,
    },
    MuiTableCell: {
      root: {
        fontSize: "12px",
      }
    },
    MuiPaper: {
      root: {
        padding: "15px",
      },
      elevation4: {
        boxShadow: "0 1px 15px 0 rgba(123,123,123,0.05)",
      }
    }
  }
})

export default function UserManager(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [testState, setTestState] = useState("Testing Start");

  // useEffect(()=>{
  //   console.log(testState);
  // },[]);

  // useEffect(()=>{
  //   console.log(testState);
  // },[testState]);

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "user_name",
      label: "Username",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "user_roles",
      label: "Role",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "company_name",
      label: "Company",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "user_email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "country_name",
      label: "Country",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "city_name",
      label: "City",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "designation",
      label: "Designation",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "registerd_at",
      label: "Registration",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {

          return (
            // <button onClick={()=>{setTestState("Testing Done");}}>Test Click</button>
            <MuiButton variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </MuiButton>
          )
        }
      }
    },
  ];

  const data = [
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Developer",
      "id": 12,
      "is_spoc": 1,
      "registerd_at": "Tue, 22 Jun 2021 10:16:41 GMT",
      "status": null,
      "user_email": "anandyadav.datagrid@gmail.com",
      "user_name": "Anand",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "",
      "id": 8,
      "is_spoc": 0,
      "registerd_at": "Tue, 08 Jun 2021 10:19:39 GMT",
      "status": 1,
      "user_email": "shrawan.kharkia@profitwheel.com",
      "user_name": "Shrawan Kharkia",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Manager",
      "id": 4,
      "is_spoc": 1,
      "registerd_at": "Tue, 08 Jun 2021 04:44:05 GMT",
      "status": 1,
      "user_email": "danish.khan@profitwheel.com",
      "user_name": "Danish",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Developer",
      "id": 13,
      "is_spoc": 1,
      "registerd_at": "Mon, 12 Jul 2021 07:56:39 GMT",
      "status": null,
      "user_email": "dharmesh.shahu@profitwheel.com",
      "user_name": "Dharmesh",
      "user_roles": "Super admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "review user",
      "id": 11,
      "is_spoc": 1,
      "registerd_at": "Fri, 11 Jun 2021 19:13:17 GMT",
      "status": 1,
      "user_email": "facebookappreview@profitwheel.com",
      "user_name": "Facebook user",
      "user_roles": "User"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Developer",
      "id": 6,
      "is_spoc": 1,
      "registerd_at": "Tue, 08 Jun 2021 05:00:02 GMT",
      "status": 1,
      "user_email": "lalit.giriya@profitwheel.com",
      "user_name": "Lalit",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Developer",
      "id": 5,
      "is_spoc": 1,
      "registerd_at": "Tue, 08 Jun 2021 04:49:36 GMT",
      "status": 1,
      "user_email": "anand@gmail.com",
      "user_name": "Anand",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Manager",
      "id": 10,
      "is_spoc": 1,
      "registerd_at": "Fri, 11 Jun 2021 09:29:18 GMT",
      "status": 1,
      "user_email": "gautam@profitwheel.com",
      "user_name": "Gautam",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "UI developer",
      "id": 9,
      "is_spoc": 1,
      "registerd_at": "Tue, 08 Jun 2021 12:06:43 GMT",
      "status": 1,
      "user_email": "rushiraj.datagrid@gmail.com",
      "user_name": "Rushiraj ",
      "user_roles": "Admin"
    },
    {
      "city_name": "Mumbai",
      "company_name": "Profitwheel Data Technologies Pvt Ltd",
      "country_name": "India",
      "designation": "Project Manager",
      "id": 7,
      "is_spoc": 1,
      "registerd_at": "Tue, 08 Jun 2021 05:46:30 GMT",
      "status": 1,
      "user_email": "kapildev.hemnani@profitwheel.com",
      "user_name": "Kapildev",
      "user_roles": "Admin"
    }
  ];

  const options = {
    print: false,
    filterType: "multiselect",
    selectableRows: false
  };

  return (
    <Layout>
      <div className="content">
        <Card style={{ padding: "15px" }}>
          User Manager
        </Card>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            data={data}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </Layout>
  );
};
