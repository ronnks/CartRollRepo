import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard";

function ProductsBox({ filteredProducts }) {
  return (
    <Row xs={1} md={2} lg={3}>
      {filteredProducts.map((p) => (
        <Col key={p._id}>
          <ProductCard product={p} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductsBox;
