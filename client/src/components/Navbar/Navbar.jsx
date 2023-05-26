import React from "react";
import "./Navbar.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="menu">
      <Container>
        <Row>
          <Col md={9}>
            <ul>
              <li>
                <Link to={"/"}>
                  <i>
                    <AiOutlineShop />
                  </i>
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/cart"}>
                  <i>
                    <AiOutlineShoppingCart />
                  </i>
                  Cart
                </Link>
              </li>
              <li>
                <Link to={"/wishlist"}>
                  <i>
                    <AiOutlineHeart />
                  </i>
                  Wish List
                </Link>
              </li>
              <li>
                <Link to={"/admin"}>
                  <i>
                    <AiOutlineUser />
                  </i>
                  Admin
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            {/* Search */}
            <div className="nav-sidebar-widget">
              <input
                type="search"
                className="form-control"
                placeholder="Search product . . ."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
