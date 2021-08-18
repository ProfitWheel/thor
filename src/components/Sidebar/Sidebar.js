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
import { NavLink, useHistory, useLocation } from "react-router-dom";

// reactstrap components
import { Nav, Collapse } from "reactstrap";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Sidebar(props) {

  const history = useHistory();
  const location = useLocation();

  const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);

  const [pathName, setPathName] = useState(getLastItem(window.location.pathname));

  const [menuState, setMenuState] = React.useState({});
  
  const [signOut, setSignOut] = useState(false);

  const navList = [
    {
      title: "Control Room",
      path: null,
      pageId: "controlroom",
      icon: <i className="tim-icons icon-settings-gear-63" />,
      subNav: [
        {
          title: "Access Manager",
          path: null,
          pageId: "accessmanager",
          icon: null,
          subNav: [
              {
                title: "User Manager",
                path: "/user-manager",
                pageId: "user-manager",
                icon: null
              },

              {
                title: "Company Manger",
                path: "/company-manager",
                pageId: "company-manager",
                icon: null
              },
          ]
        },

        {
          title: "Group Manager",
          path: null,
          pageId: "groupmanager",
          icon: null,
          subNav: [
              {
                title: "Campaign Grouping",
                path: "/campaign-group",
                pageId: "campaign-group",
                icon: null
              },

              {
                title: "Product Grouping",
                path: "/product-group",
                pageId: "product-group",
                icon: null
              },
          ]
        },
        {
          title: "Client Manager",
          path: "/client-manager",
          pageId: "client-manager",
          icon: null
        },
      ]
    },
    {
      title: "Profit Bridge",
      path: null,
      pageId: "profitbridge",
      icon: <i className="tim-icons icon-components" />,
      subNav: [
          {
            title: "Audience Receptivity Score",
            path: "/ars",
            pageId: "ars",
            icon: null
          }
      ]
    },
    {
      title: "Reports",
      path: "/reports",
      pageId: "reports",
      icon: <i className="tim-icons icon-notes" />
    },
    {
      title: "Settings",
      path: "/settings",
      pageId: "settings",
      icon: <i className="tim-icons icon-settings" />
    }
  ];

  const navCreate = (routes) => {
      return routes.map(routeItem => {
          if(!routeItem.hasOwnProperty('subNav')) {
            return (
              <li className={location.pathname === routeItem.path ? "active" : null}>
                <a
                  href={routeItem.path}
                  onClick={(e)=>{
                    e.preventDefault();
                    if(routeItem.path) {
                      history.push(routeItem.path);
                    }
                  }}
                >
                  <div className="siderbarelement">
                    {routeItem.icon}
                    <p><span className="twolinestext">{routeItem.title}</span></p>
                  </div>
                </a>
              </li>
            )
          }
          else {
            return (
              <li className={routeItem.subNav?.some((item => item.path === location.pathname)) || routeItem.subNav?.some(topItem => topItem.subNav?.some((item => item.path === location.pathname))) ? "active" : null}>
                <a
                  href={routeItem.path}
                  data-toggle="collapse"
                  aria-expanded={menuState[routeItem.pageId]}
                  onClick={(e)=>{
                    e.preventDefault();
                    let st = {};
                    st[routeItem.pageId] = !menuState[routeItem.pageId];
                    setMenuState({ ...menuState, ...st });
                  }}
                >
                  <div className="siderbarelement">
                    {routeItem.icon}
                    <p><span className="twolinestext">{routeItem.title}</span>
                    <b className="caret caret2" /></p>
                  </div>
                </a>
                <Collapse isOpen={menuState[routeItem.pageId]}>
              <ul className="nav">
                    {navCreateChild(routeItem.subNav)}
              </ul>
              </Collapse>
              </li>
            )
          }
      });
  }

  const navCreateChild = (routes) => {
    return routes.map(routeItem => {
        if(!routeItem.hasOwnProperty('subNav')) {
          return (
            <li className={location.pathname === routeItem.path ? "active" : null}>
              <a
                href={routeItem.path}
                onClick={(e)=>{
                  e.preventDefault();
                  if(routeItem.path) {
                    history.push(routeItem.path);
                  }
                }}
              >
                <div className="siderbarelement">
                            <span className="sidebar-normal">
                            <span className="twolinestext">{routeItem.title}</span>
                            </span>
                          </div>
              </a>
            </li>
          )
        }
        else {
          return (
            <li className={routeItem.subNav?.some((item => item.path === location.pathname)) || routeItem.subNav?.some(topItem => topItem.subNav?.some((item => item.path === location.pathname))) ? "active" : null}>
              <a
                href={routeItem.path}
                data-toggle="collapse"
                aria-expanded={menuState[routeItem.pageId]}
                onClick={(e)=>{
                  e.preventDefault();
                  let st = {};
                  st[routeItem.pageId] = !menuState[routeItem.pageId];
                  setMenuState({ ...menuState, ...st });
                }}
              >

<div className="siderbarelement">
                      <span className="sidebar-normal">
                      <span className="twolinestext">{routeItem.title}</span>
                        <b className="caret" />
                      </span>
                    </div>
              </a>
              <Collapse isOpen={menuState[routeItem.pageId]}>
            <ul className="nav">
                  {navCreateChild(routeItem.subNav)}
            </ul>
            </Collapse>
            </li>
          )
        }
    });
}

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

  useEffect(()=>{
    console.log(location.pathname);
  },[]);

  return (
    <div className="sidebar" data="blue" onMouseLeave={()=>{
      if(document.getElementsByTagName("body")[0].classList.contains("sidebar-mini")) {
      setMenuState({});
      }
    }}>
      <div className="sidebar-wrapper">
      {/* <div className="logo">
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
          </div> */}

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

          {navCreate(navList)}

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
