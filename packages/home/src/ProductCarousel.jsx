import React from "react";
import { Carousel } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

import fruit from "./fruit";
import ProductCard from "./ProductCard";

export default () => {
  const carousel = React.useRef(null);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px calc(100% - 100px) 50px",
      }}
    >
      <CaretLeftFilled
        onClick={() => carousel.current.prev()}
        fill="black"
        style={{
          fontSize: 50,
          marginTop: 120,
        }}
      />
      <Carousel slidesToShow={4} ref={carousel}>
        {fruit.map((product) => (
          <div key={product.name}>
            <ProductCard {...product} />
          </div>
        ))}
      </Carousel>
      <CaretRightFilled
        onClick={() => carousel.current.next()}
        fill="black"
        style={{
          fontSize: 50,
          marginTop: 120,
        }}
      />
    </div>
  );
};
