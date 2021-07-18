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

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container-fluid">

        <div className="copyright">
          © {new Date().getFullYear()} {" "}
          <a href="https://www.profitwheel.com/" target="_blank">
            ProfitWheel
          </a>{" "}
          Data Technologies Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
