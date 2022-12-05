import React from "react";
import "./RoadMap.css";
export default function RoadMap() {
  return (
    <div className="whole_road_map" style={{ paddingBottom: 100 }}>
      <div className="text-center" style={{ marginTop: 70, paddingTop: 50 }}>
        <h1 className="heading_two">Road Map</h1>
      </div>
      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Build DrugCipher Smart Contract.</h2>
            <p>
              Build smart contract and complete the flow and technical test to
              create a token on NEAR.
            </p>
            {/* <span className="cd-date">29th September, 2021</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie"></div>
          <div className="cd-timeline-content">
            <h2>Prepare marketing materials.</h2>
            <p>
              Prepare marketing materials for DrugCipher and finalize UI/UX v1.
            </p>
            {/* <span className="cd-date">10th December, 2021</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>
              Launch Drugcipher mobile application in App Store & Google
              Playstore.
            </h2>
            <p>
              In this phase,Launch Drugcipher mobile application in Apple &
              Google stores and audit DrugCipher smart-contract audit.
            </p>
            {/* <span className="cd-date">11th February, 2022</span> */}
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location"></div>
          <div className="cd-timeline-content">
            <h2>Complete equity raise.</h2>
            <p>Complete equity raise and 600 number of near wallets created weekly.</p>
            {/* <span className="cd-date">Jan 18</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location"></div>
          <div className="cd-timeline-content">
            <h2>Partnership.</h2>
            <p>
              In this phase, we will have partnerships with various government/
              non-governmental organizations regulating pharmaceutical
              industries across the globe.
            </p>
            {/* <span className="cd-date">Jan 18</span> */}
          </div>
        </div>
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie"></div>
          <div className="cd-timeline-content">
            <h2>Launching.</h2>
            <p>
              In this phase, we are going to launch the product into the market
              for pharmaceutical companies to register and upload their drug
              information. And for the patient to validate the drug and earn.
            </p>
            {/* <span className="cd-date">Jan 18</span> */}
          </div>
        </div>
      </section>
    </div>
  );
}
