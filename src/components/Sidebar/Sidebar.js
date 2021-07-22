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
/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Nav, Collapse } from "reactstrap";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Sidebar(props) {

  const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);

  const [pathName, setPathName] = useState(getLastItem(window.location.pathname));

  const [menuState, setMenuState] = React.useState({});
  
  const [signOut, setSignOut] = useState(false);

  useEffect(() => {
    if (signOut) {
      localStorage.removeItem("access_token");
      window.location.href = '/';
    }
  }, [signOut]);

  useEffect(() => {
    setMenuState({});
    // console.log(props.sidebarOpened);
  }, [props.sidebarOpened]);

  return (
    <div className="sidebar" data="blue" onMouseLeave={()=>{
      if(document.getElementsByTagName("body")[0].classList.contains("sidebar-mini")) {
      setMenuState({});
      }
    }}>
      <div className="sidebar-wrapper">
      <div className="logo">
      <div className="logo-img">
            <AccountCircleIcon style={{ color: "#fff",fontSize: "20px" }}/>
          </div>
          <div
          className="logo-text"
          target="_blank"
        >
          <span>Dharmesh Shahu</span>
            <span className="assignedrole">Admin</span>
        </div>
          </div>
        <ul className="nav">

          {/* dashboard start */}
          <li className={
            pathName === "dashboard"

              ? "active" : null}>
            <NavLink
              to={"/dashboard"}
              activeClassName=""
            >
              <div className="siderbarelement">
                <i className="tim-icons icon-molecule-40" />
                <p><span className="twolinestext">Dashboard</span></p>
              </div>
            </NavLink>
          </li>
          {/* dashboard end */}

          {/* Control Room */}

          <li className={
            pathName === "user-manager" ||
              pathName === "company-manager" ||
              pathName === "campaign-group" ||
              pathName === "product-group" ||
              pathName === "client-manager"

              ? "active" : null}>
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={menuState["controlroom"]}
              onClick={(e) => {
                e.preventDefault();
                let st = {};
                st["controlroom"] = !menuState["controlroom"];
                setMenuState({ ...menuState, ...st });
              }}
            >
              <div className="siderbarelement">
                <i className="tim-icons icon-settings-gear-63" />
                <p>
                <span className="twolinestext">Control room</span>
                  <b className="caret caret2" />
                </p>
              </div>
            </a>
            <Collapse isOpen={menuState["controlroom"]}>
              <ul className="nav">

                {/* access manager */}
                <li className={
                  pathName === "user-manager" ||
                    pathName === "company-manager"

                    ? "active" : null}>
                  <a
                    href="#pablo"
                    data-toggle="collapse"
                    aria-expanded={menuState["accessmanager"]}
                    onClick={(e) => {
                      e.preventDefault();
                      let st = {};
                      st["accessmanager"] = !menuState["accessmanager"];
                      setMenuState({ ...menuState, ...st });
                    }}
                  >
                    <div className="siderbarelement">
                      <span className="sidebar-normal">
                      <span className="twolinestext">Access Manager</span>
                        <b className="caret" />
                      </span>
                    </div>
                  </a>
                  <Collapse isOpen={menuState["accessmanager"]}>
                    <ul className="nav">
                      <li className={
                        pathName === "user-manager"

                          ? "active" : null}>
                        <NavLink
                          to={"/user-manager"}
                          activeClassName=""
                        >
                          <div className="siderbarelement">
                            <span className="sidebar-normal">
                            <span className="twolinestext">User Manager</span>
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className={
                        pathName === "company-manager"

                          ? "active" : null}>
                        <NavLink
                          to={"/company-manager"}
                          activeClassName=""
                        >
                          <div className="siderbarelement">
                            <span className="sidebar-normal">
                            <span className="twolinestext">Company Manager</span>
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </Collapse>
                </li>

                {/* access manager */}

                {/* group manager */}
                <li className={
                  pathName === "campaign-group" ||
                    pathName === "product-group"

                    ? "active" : null}>
                  <a
                    href="#pablo"
                    data-toggle="collapse"
                    aria-expanded={menuState["groupmanager"]}
                    onClick={(e) => {
                      e.preventDefault();
                      let st = {};
                      st["groupmanager"] = !menuState["groupmanager"];
                      setMenuState({ ...menuState, ...st });
                    }}
                  >
                    <div className="siderbarelement">
                      <span className="sidebar-normal">
                      <span className="twolinestext">Group Manager</span>
                        <b className="caret" />
                      </span>
                    </div>
                  </a>
                  <Collapse isOpen={menuState["groupmanager"]}>
                    <ul className="nav">
                      <li className={
                        pathName === "campaign-group"

                          ? "active" : null}>
                        <NavLink
                          to={"/campaign-group"}
                          activeClassName=""
                        >
                          <div className="siderbarelement">
                            <span className="sidebar-normal">
                            <span className="twolinestext">Campaign Grouping</span>
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li className={
                        pathName === "product-group"

                          ? "active" : null}>
                        <NavLink
                          to={"/product-group"}
                          activeClassName=""
                        >
                          <div className="siderbarelement">
                            <span className="sidebar-normal">
                            <span className="twolinestext">Product Grouping</span>
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </Collapse>
                </li>

                {/* group manager */}

                {/* Client manager */}
                <li className={
                  pathName === "client-manager"
                    ? "active" : null}>
                  <NavLink
                    to={"/client-manager"}
                    activeClassName=""
                  >
                    <div className="siderbarelement">
                      <span className="sidebar-normal">
                      <span className="twolinestext">Client Manager</span>
                      </span>
                    </div>
                  </NavLink>
                </li>

                {/* Client manager */}

              </ul>
            </Collapse>
          </li>

          {/* control room */}

          {/* profitbridge */}

          <li className={
            pathName === "ars"

              ? "active" : null}>
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={menuState["profitbridge"]}
              onClick={(e) => {
                e.preventDefault();
                let st = {};
                st["profitbridge"] = !menuState["profitbridge"];
                setMenuState({ ...menuState, ...st });
              }}
            >
              <div className="siderbarelement">
                <i className="tim-icons icon-components" />
                <p>
                <span className="twolinestext">Profit Bridge</span>
                  <b className="caret caret2" />
                </p>
              </div>
            </a>
            <Collapse isOpen={menuState["profitbridge"]}>
              <ul className="nav">
                {/* Client manager */}
                <li className={
                  pathName === "ars"
                    ? "active" : null}>
                  <NavLink
                    to={"/ars"}
                    activeClassName=""
                  >
                    <div className="siderbarelement">
                      <span className="sidebar-normal">
                      <span className="twolinestext">Audience Receptivity Score</span>
                      </span>
                    </div>
                  </NavLink>
                </li>

                {/* Client manager */}

              </ul>
            </Collapse>
          </li>

          {/* profit bridge */}

          {/* reports */}
          <li className={
            pathName === "reports"

              ? "active" : null}>
            <NavLink
              to={"/reports"}
              activeClassName=""
            >
              <>
                <i className="tim-icons icon-notes" />
                <p><span className="twolinestext">Reports</span></p>
              </>
            </NavLink>
          </li>
          {/* reports */}

          {/* settings */}
          <li className={
            pathName === "settings"

              ? "active" : null}>
            <NavLink
              to={"/settings"}
              activeClassName=""
            >
              <>
                <i className="tim-icons icon-settings" />
                <p><span className="twolinestext">Settings</span></p>
              </>
            </NavLink>
          </li>
          {/* settings */}

          {/* logout */}
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                setSignOut(true);
              }}
            >
              <>
                <i className="tim-icons icon-button-power" />
                <p><span className="twolinestext">Log Out</span></p>
              </>
            </a>
          </li>
          {/* logout */}



        </ul>

      </div>
    </div>
  );
};
