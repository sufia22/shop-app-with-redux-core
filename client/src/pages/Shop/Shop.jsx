import React from "react";
import "./Shop.scss";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";

const Shop = () => {
  return (
    <section className="shop-page my-5">
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <div className="shop-items-wraper ps-5">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Shop;
