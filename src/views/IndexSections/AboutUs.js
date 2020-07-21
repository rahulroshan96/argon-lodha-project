/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/brand/pexels-photo-2280571.webp"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/brand/pexels-photo-356040.webp"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/brand/pexels-photo-3082451.webp"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/brand/pexels-photo-2280549.webp"),
    altText: "",
    caption: "",
    header: ""
  }
];

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  ABOUT US
                </h1>
                <p className="lead text-white mt-4">
                We are one of the premier pharmaceutical company in India engaged in manufacturing & exporting of Pharmaceutical Turnkey Projects.
LODHA International LLP is Indian based company owned and operated since 2008. LODHA focus on their customer’s requirements to drive and develop the Lodha range of Packaging Machinery & Process Equipment’s for Pharmaceutical, Healthcare, Veterinary, Cosmetic, Chemical and Biotech Industry.
                </p>
                {/* <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button> */}
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;
