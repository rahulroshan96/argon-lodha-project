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
import { Row, Col } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Products extends React.Component {
  render() {
    return (
      <>
        {/* <h2 className="mt-lg mb-5">
          <span>Typography</span>
        </h2> */}
        {/* Specialized titles */}
        <h2 className="h4 text-success font-weight-bold mt-lg">
          Our Products
        </h2>
        {/* <h2 className="mt-lg mb-5">
          <span>Images</span>
        </h2> */}
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            cap-sealing-machine
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/products/cap-sealing-machine.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            capsule-section
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/products/capsule-section.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            labeling-machine
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/products/labeling-machine.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            liquid-filing-machine
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/products/liquid-filing-machine.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            packing-machine
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/products/packing-machine.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            powder-filling-machine
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("assets/img/products/powder-filling-machine.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            sterile-washing-machines
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/products/sterile-washing-machines.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
            tablet-section
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/products/tablet-section.jpg")}
              style={{ width: "250px", height:"230px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Products;
