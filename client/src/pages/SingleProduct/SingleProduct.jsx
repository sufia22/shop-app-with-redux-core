import React from "react";
import "./SingleProduct.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <Container>
        <Row>
          <Col md={6}>
            <div className="product-photo">
              <img
                src="https://shop.azelab.com/images/products/thumbs/1.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col md={6} clas>
            <div className="product-quick-view ms-5">
              <div className="product-details">
                <div className="product-title">
                  <h3>Lacoste Cotton Shirt Slim Fit</h3>
                </div>
                <hr />
                <div className="info">
                  <div className="view-pricing">
                    <span className="sale">$900</span>
                    <span className="regular">$1200</span>
                  </div>

                  <div className="view-stock">
                    <span className="stock">Availability: In stock</span>
                  </div>
                </div>
                <hr />
                <div className="product-info">
                  <div className="product-categories">
                    <span>Product Tags: Clother, Fashion</span>
                  </div>
                  <div className="product-categories">
                    <span>Category: Mens Wear</span>
                  </div>
                  <div className="product-categories">
                    <span>Brand: Easy</span>
                  </div>
                </div>

                <hr />

                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="cart-btn">
                  <Link to={"/cart"}>
                    <i>
                      <AiOutlineShoppingCart />
                    </i>
                    Add to cart
                  </Link>

                  <Link to={"/wishlist"} className="wish-button">
                    <i>
                      <AiOutlineHeart />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md="12">
            <h2>Related Products</h2>
          </Col>
          <Col md="12">
            <div className="related-products">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
