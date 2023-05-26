import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-area">
      {/* Search */}
      {/* <div className="sidebar-widget">
        <h4 className="widget-title">Search Product</h4>
        <hr />
        <input
          type="search"
          className="form-control"
          placeholder="Search . . ."
        />
      </div> */}
      {/* Categories */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Categories</h4>
        <hr />
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
        </ul>
      </div>

      {/* Brands */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Brands</h4>
        <hr />
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Tags</h4>
        <hr />
        <div className="tags-items">
          <a href="">Eid</a>
          <a href="">Puja</a>
          <a href="">Corona</a>
          <a href="">Politics</a>
        </div>
      </div>

      {/* Price range */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Search by Price</h4>
        <hr />
        <div className="price-search">
          <input type="text" placeholder="min" />
          <input type="text" placeholder="max" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
