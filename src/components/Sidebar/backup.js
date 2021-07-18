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

export default function Sidebar(props) {

  const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

  const [pathName, setPathName] = useState(getLastItem(window.location.pathname));

  useEffect(()=>{
    console.log(pathName);
  },[]);

  return (
    <div className="sidebar" data="blue">
      <div className="sidebar-wrapper">

        <ul className="nav">

          {/* dashboard start */}
          <li className={
            pathName === "dashboard"

              ? "active" : null}>
            <NavLink
              to={"/dashboard"}
              activeClassName=""
            >
              <>
                <i className="tim-icons icon-chart-pie-36" />
                <p>Dashboard</p>
              </>
            </NavLink>
          </li>
          {/* dashboard end */}

          <li className={
            pathName === "user-management" ||
              pathName === "company-management" ||
              pathName === "client-management"

              ? "active" : null}>
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={
                pathName === "user-management" ||
                  pathName === "company-management" ||
                  pathName === "client-management"

                  ? true : false}
            >
              <>
                <i className="tim-icons icon-settings-gear-63" />
                <p>
                  Control room
                  <b className="caret caret2" />
                </p>
              </>
            </a>
            <Collapse isOpen={
              pathName === "user-management" ||
                pathName === "company-management" ||
                pathName === "client-management"

                ? true : false}>
              <ul className="nav">

                {/* access management */}
                <li className={
                  pathName === "user-management" ||
                    pathName === "company-management"

                    ? "active" : null}>
                  <a
                    href="#pablo"
                    data-toggle="collapse"
                    aria-expanded={
                      pathName === "user-management" ||
                        pathName === "company-management"

                        ? true : false}
                  >
                    <>
                      <span className="sidebar-mini-icon">
                        <i className="tim-icons icon-badge" />
                      </span>
                      <span className="sidebar-normal">
                        Access Management
                        <b className="caret" />
                      </span>
                    </>
                  </a>
                  <Collapse isOpen={true}>
                    <ul className="nav">
                      <li className={
                        pathName === "user-management"

                          ? "active" : null}>
                        <NavLink
                          to={"/user-management"}
                          activeClassName=""
                        >
                          <>
                            <span className="sidebar-mini-icon">
                              <i className="tim-icons icon-single-02" />
                            </span>
                            <span className="sidebar-normal">
                              User Management
                            </span>
                          </>
                        </NavLink>
                      </li>
                      <li className={
                        pathName === "company-management"

                          ? "active" : null}>
                        <NavLink
                          to={"/company-management"}
                          activeClassName=""
                        >
                          <>
                            <span className="sidebar-mini-icon">
                              <i className="tim-icons icon-bank" />
                            </span>
                            <span className="sidebar-normal">
                              Company Management
                            </span>
                          </>
                        </NavLink>
                      </li>
                    </ul>
                  </Collapse>
                </li>

                {/* access management */}

                {/* Client Management */}
                <li className={
                  pathName === "client-management"
                  ? "active" : null}>
                  <NavLink
                    to={"/client-management"}
                    activeClassName=""
                  >
                    <>
                      <span className="sidebar-mini-icon">
                        <i className="tim-icons icon-book-bookmark" />
                      </span>
                      <span className="sidebar-normal">
                        Client Management
                      </span>
                    </>
                  </NavLink>
                </li>

                {/* Client Management */}

              </ul>
            </Collapse>
          </li>




        </ul>

      </div>
    </div>
  );
};
