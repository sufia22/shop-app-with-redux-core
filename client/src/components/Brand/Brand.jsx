import React, { useState } from "react";
import "./Brand.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Form, Table } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import BrandModal from "./BrandModal";

const Brand = ({ show, onHide }) => {
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(true);

  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Brands</h2>
        <button onClick={() => setModal(true)}>
          <AiOutlinePlus /> Create new brand
        </button>
      </div>

      <div className="table-content-list mt-4">
        <Table striped border={"1"}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>1</td>
              <td>Apple</td>
              <td>
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                  }}
                  src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                  alt=""
                />
              </td>
              <td>
                <Form.Check
                  onClick={() => setStatus(!status)}
                  type="switch"
                  id="custom-switch"
                  label={status ? "Published" : "Unpublished"}
                  checked={status}
                />
              </td>
              <td>
                <Button variant="warning" size="sm">
                  <FiEdit />
                </Button>
                &nbsp;
                <Button variant="danger" size="sm">
                  <FiTrash2 />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <BrandModal show={modal} onHide={() => setModal(false)} />
    </div>
  );
};

export default Brand;
