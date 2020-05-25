import React from "react";
import { Row, Col } from "antd";

import fruit from "./fruit";
import ProductCard from "./ProductCard";

export default () => (
  <Row gutter={16}>
    {fruit.slice(0, 4).map((product) => (
      <Col key={product.name} span={6}>
        <ProductCard {...product} />
      </Col>
    ))}
  </Row>
);
