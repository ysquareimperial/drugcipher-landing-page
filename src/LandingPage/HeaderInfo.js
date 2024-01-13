import React from "react";
import { Col, Row } from "reactstrap";
import Clock from "react-live-clock";
import { Instagram, Twitter, Facebook, GitHub } from "react-feather";
import whitepaper from "../DrugCipher.pdf";
export default function HeaderInfo() {
  // const date = new Date()
  // const currentYear = date.getFullYear()
  // const currentMonth = date.getMonth()
  // const currentDay = date.getDay()
  // const time = new Date();
  // const currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // const d = new Date();
  // const currentDayName = weekday[d.getDay()];
  return (
    <div className="section_divider">
      <Row className="m-0">
        <Col md={2}>
          <div className="paper-div">
            <div className="paper-div-item">
              <p className="m-0">
                <a
                  href={whitepaper}
                  rel="noreferrer"
                  target="_blank"
                  className="text-secondary"
                >
                  Whitepaper
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <p className="m-0" style={{fontSize:13}}>
            <marquee className="m-0" style={{ color: "white" }}>
              <Clock
                filter={(date) => date.replace("8", "7a")}
                format={"HH:mm:ss, dddd, MMMM Mo, YYYY"}
                ticking={true}
                style={{margin:'0'}}
              />
              {". "}
            </marquee>
          </p>
        </Col>
        <Col md={2}>
          <div className="header-icons-div">
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://github.com/ysquareimperial/drugcipher"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub size="1em" />
              </a>
            </div>
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://instagram.com/drugcipher"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size="1em" />
              </a>
            </div>
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://twitter.com/drugcipher"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size="1em" />
              </a>
            </div>
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://fb.me/drugcipher"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size="1em" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
