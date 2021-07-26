/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  Tooltip,
} from "reactstrap";

const AdminNavbar = (props) => {
  const history = useHistory();
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const [signOut, setSignOut] = useState(false);

  useEffect(() => {
    if (signOut) {
      localStorage.removeItem("access_token");
      window.location.href = '/';
    }
  }, [signOut]);

  return (
    <>
      <Navbar
        className="pw-navbar"
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={props.handleMiniClick}
              >
                <i className="tim-icons icon-align-left-2 visible-on-sidebar-regular" />
                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
              </Button>
              {/* <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="bottom"
              >
                Sidebar toggle
              </UncontrolledTooltip> */}
            </div>
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpenedSmall,
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={props.toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <Link
              className="navbar-brand"
              to={"/"}
            >
              {/* {props.brandText} */}
              <img src="/images/pw-logo-small.png" alt="pwlogo" style={{ width: "150px" }} />
            </Link>
          </div>
         <div className="text-right navbar-right-toggles">
           <div className="creditdisplay">
             <h5>Credits: <span>{100}</span></h5>
             </div>
              <ul>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-google" aria-hidden="true"></i></li>
                <li><i class="fa fa-amazon" aria-hidden="true"></i></li>
              </ul>
           </div>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
