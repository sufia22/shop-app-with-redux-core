import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ProductViewModal.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductViewModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton>
          <h2>Samsung S23 Ultra</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="product-quick-view">
            <div className="product-photo">
              <img
                src="https://shop.azelab.com/images/products/thumbs/1.jpg"
                alt=""
              />
            </div>
            <div className="product-details">
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

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur hic explicabo in officiis omnis repudiandae?
              </p>
              <div className="cart-btn">
                <Link to={"/cart"}>
                  <i>
                    <AiOutlineShoppingCart />
                  </i>
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductViewModal;
