import "./Product.scss";
import { Link } from "react-router-dom";
import { BsBag, BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

const Product = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="product-item">
      <div className="product-box">
        <ProductViewModal show={show} onHide={() => setShow(false)} />
        <div className="product-photo">
          <Link to={"/ghgytyfi"}>
            <img
              src="https://shop.azelab.com/images/products/thumbs/1.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="product-body">
          <div className="product-button">
            <Link to={"/cart"}>
              <BsBag />
            </Link>
            <Link onClick={() => setShow(true)}>
              <BsEye />
            </Link>

            <Link to={"/wishlist"}>
              <AiOutlineHeart />
            </Link>
          </div>
          <hr />

          <div className="pricing">
            <span className="sale my-2">$900</span>
            <span className="regular mx-2">$1200</span>
          </div>
          <hr />
          <div className="product-title">Lacoste Cotton Shirt Slim Fit</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
