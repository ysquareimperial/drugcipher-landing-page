import React from "react";
import { Col, Row } from "reactstrap";
import Button from "../CustomFiles/Button";
import drugcipherIcon from "../image/DRUG CIPHER (2).png";
// import { login } from '../utils/helper'
export default function Navbar() {
  return (
    <div className="nav_bar large_nav_bar">
      <div className="container">
        <Row className="m-0">
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <div
              style={{
                display: "flex",
                //     justifyContent: "center",
                alignItems: "center",
                height: "75px",
              }}
            >
              <div>
                <img
                  src={drugcipherIcon}
                  alt="drugcipherlogo"
                  style={{ width: 50, borderRadius: 10 }}
                />
                <h5 className="dc-name">DrugCipher</h5>
              </div>
            </div>
          </Col>
          {/* <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col> */}
          {/* <Col xl={4} lg={4} md={4} sm={4} xs={4} className="nav_menuu"> */}
          {/* <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
              height: "75px",
            }}
          >
            <div>
              <p className="nav_menu" style={{ margin: 0 }}>
                <a style={{ color: "white" }} href="#about-us">
                  About us
                </a>
              </p>
            </div>

            <div>
              <p className="nav_menu" style={{ margin: 0 }}>
                <a style={{ color: "white" }} href="#contact">
                  Contact
                </a>
              </p>
            </div>
            <div>
              <p className="nav_menu" style={{ margin: 0 }}>
                <a style={{ color: "white" }} href="#blog">
                  Blog
                </a>
              </p>
            </div>
          </div> */}
          {/* </Col> */}

          {/* <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col> */}
          <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                height: "75px",
              }}
            >
              <div>
                <a
                  href="https://app.drugcipher.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={"market_place_btn"} btnText={"Register"} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
