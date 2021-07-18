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
import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Nav, Collapse } from "reactstrap";

var ps;

export default function Sidebar(props) {

  return (
    <div className="sidebar" data="blue">
      <div className="sidebar-wrapper">
        
        <ul className="nav">
        <li>
        <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={true}
              // onClick={(e) => {
              //   e.preventDefault();
              //   setState({ ...state, ...st });
              // }}
            >
              <>
                  <i className="tim-icons icon-chart-pie-36" />
                  <p>
                    Parent
                    <b className="caret" />
                  </p>
                </>
            </a>
            <Collapse isOpen={true}>
              <ul className="nav">
                <li>
                <NavLink
            to={"/dashboard"}
            activeClassName=""
          >
              <>
                <span className="sidebar-mini-icon">
                  C
                </span>
                <span className="sidebar-normal">
                  Child
                </span>
              </>
          </NavLink>
                  </li>


                  <li>
        <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={false}
            >
              <>
                  <span className="sidebar-mini-icon">
                    D
                  </span>
                  <span className="sidebar-normal">
                    Child2
                    <b className="caret" />
                  </span>
                </>
            </a>
            <Collapse isOpen={true}>
              <ul className="nav">
                <li>
                <NavLink
            to={"/dashboard"}
            activeClassName=""
          >
              <>
                <span className="sidebar-mini-icon">
                  D
                </span>
                <span className="sidebar-normal">
                  GrandChild
                </span>
              </>
          </NavLink>
                  </li>
              </ul>
            </Collapse>
          </li>

              </ul>
            </Collapse>
          </li>
          <li >
          <NavLink
            to={"/dashboard"}
            activeClassName=""
          >
              <>
                <i className="tim-icons icon-chart-pie-36" />
                <p>Parent Link</p>
              </>
          </NavLink>
        </li>
          </ul>

      </div>
    </div>
  );
};
