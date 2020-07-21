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
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  Mission and Vision{" "}
                  {/* <span className="text-white">completed with examples</span> */}
                </h3>
                <p className="description2 text-white">
                Our mission is to manufacture premium quality automatic pharmaceutical packaging machines & process equipment’s. LODHA symbol of excellence and high quality, born from unique and exclusive experience developed here in India in our Indian Pharmaceutical Packaging Valley and made to represent professionalism and Indian design in the world To excel our business by bringing quality products and services to our customer, serving as a resource, introducing new and creative solutions through our innovation.
                </p>
                <p className="description2 text-white">
                To continuously improve in-house systems and processes so as to delight every customer by finding innovative solutions to their requirements and also by providing growth and development opportunities to every employee in an environment that supports efficient and
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-right">
                {/* src/assets/img/brand/pexels-photo-132340.webp */}
                <img
                  alt="..."
                  className="rounded shadow"
                  src={require("assets/img/brand/pexels-photo-1888005.webp")}
                  style={{ width: "400px", height:"350px" }}
                />
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

export default Footer;
