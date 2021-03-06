import React from "react";
import { Link } from "react-router-dom";
import Dg3Logo from "../../assets/img/dg3.png";

const Footer = () => {
  return (
    <footer className="py-5 bg-primary text-white" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <img src={Dg3Logo} alt="Dg3 Logo" />
            <small className="d-block mb-3 text-white">&copy; 2022-2023</small>
          </div>

          <div className="col-md-6 col-sm-12 col-lg">
            <h5 className="fw-bold">Fast Links</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="link-secondary" to="pages/formtype">
                  Form Type Database
                </Link>
              </li>
              <li>
                <Link className="link-secondary" to="#">
                  Job Assignment
                </Link>
              </li>
              <li>
                <Link className="link-secondary" to="#">
                  Remote Station
                </Link>
              </li>
              <li>
                <Link className="link-secondary" to="pages/timezone">
                  Custom Timezones
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 col-lg">
            <h5 className="fw-bold">Fast Links</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="link-secondary" to="#">
                  EDGAR Codes
                </Link>
              </li>
              <li>
                <Link className="link-secondary" to="#">
                  EDGAR Calls
                </Link>
              </li>
              <li>
                <Link className="link-secondary" to="#">
                  EDGAR Turnover
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 col-lg">
            <h5 className="fw-bold">Fast Links</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="link-secondary" to="pages/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="link-secondary" to="#">
                  Portal 2
                </Link>
              </li>
              <li>
                <Link
                  className="link-secondary"
                  to="https://app.wdesk.com/home/"
                  target="_blank"
                >
                  Workiva
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
