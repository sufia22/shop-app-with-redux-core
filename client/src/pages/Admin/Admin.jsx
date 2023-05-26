import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Admin.scss";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin-page ">
      <Container>
        <Row>
          <Col md={2}>
            <div className="admin-menu">
              <ul>
                <li>
                  <Link to="">Dashboard</Link>
                </li>
                <li>
                  <Link to="products">Products</Link>
                </li>
                <li>
                  <Link to="category">Category</Link>
                </li>
                <li>
                  <Link to="tag">Tags</Link>
                </li>
                <li>
                  <Link to="brand">Brands</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
