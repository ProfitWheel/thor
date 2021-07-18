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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";

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
                toggled: props.sidebarOpened,
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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => { setCollapseOpen(!collapseOpen) }}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  style={{ marginTop: "1px" }}
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <i className="tim-icons icon-sound-wave syncanchor" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item" onClick={(e) => { e.preventDefault(); }}>
                      Authorize Facebook
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Authorize Amazon
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={(e) => e.preventDefault()}
                  style={{ marginTop: "1px" }}
                >
                  <i className="tim-icons icon-button-power" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  {/* <li style={{padding: "5px 30px",color: "#9A9A9A"}}>
                    Dharmesh Shahu
                  </li>
                  <DropdownItem divider tag="li" /> */}
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
