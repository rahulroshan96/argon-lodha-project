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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Clients extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Our Clients
                  <span className="text-success">
                    Our Clients Love US
                  </span>
                </h2>
                {/* <p className="lead">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in React. Start a new project or give an old
                  Bootstrap project a new look!
                </p> */}
                <div className="text-center">
                  <Row className="justify-content-center">
                    <Col lg="4" xs="4">
                      <a
                        // href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/clients/client-2.jpg")}
                          style={{ width: "250px", height:"230px" }}
                        />
                      </a>
                      {/* <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip> */}
                    </Col>
                    <Col lg="4" xs="4">
                      <a
                        // href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/clients/client-10.jpg")}
                        />
                      </a>
                      {/* <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip> */}
                    </Col>
                    <Col lg="4" xs="4">
                      <a
                        // href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/clients/client-13.jpg")}
                          style={{ width: "250px", height:"230px" }}
                        />
                      </a>
                      {/* <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip> */}
                    </Col>
                    </Row>
                    <Row className="justify-content-center">
                    <Col lg="4" xs="4">
                      <a
                        // href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/clients/client-19.jpg")}
                          style={{ width: "250px", height:"230px" }}
                        />
                      </a>
                      {/* <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip> */}
                    </Col>
                    <Col lg="4" xs="4">
                      <a
                        // href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/clients/client-20.jpg")}
                          style={{ width: "250px", height:"230px" }}
                        />
                      </a>
                      {/* <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip> */}
                    </Col>
                    <Col lg="4" xs="4">
                      <a
                        // href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/clients/client-21.jpg")}
                          style={{ width: "250px", height:"230px" }}
                        />
                      </a>
                      {/* <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip> */}
                    </Col>
                    </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Clients;
