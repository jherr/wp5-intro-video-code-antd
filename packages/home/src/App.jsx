import React from "react";
import { Layout, Row, Col, Divider } from "antd";

import Header from "nav/Header";

import "antd/dist/antd.css";

import ProductCarousel from "./ProductCarousel";

const SideCard = ({ name, image, children }) => (
  <Row
    style={{
      background: "white",
      border: "1px solid #ddd",
    }}
  >
    <Col span={12}>
      <img
        alt={name}
        src={image}
        style={{ maxHeight: 300, overflow: "hidden", objectFit: "contain" }}
      />
    </Col>
    <Col span={12} style={{ padding: "1em" }}>
      {children}
    </Col>
  </Row>
);

function App() {
  return (
    <Layout style={{ minHeight: 800, maxWidth: 1400, margin: "auto" }}>
      <Header />
      <Layout.Content style={{ padding: "2em" }}>
        <Divider orientation="left">Popular Favorites</Divider>
        <Row gutter={6}>
          <Col span={12}>
            <SideCard name="Mango" image="/fruit/mango.jpg">
              <h2>Mango</h2>
              <p>
                A mango is a juicy stone fruit (drupe) produced from numerous
                species of tropical trees belonging to the flowering plant genus
                Mangifera, cultivated mostly for their edible fruit.
              </p>
            </SideCard>
          </Col>
          <Col span={12}>
            <SideCard name="Peach" image="/fruit/peach.jpg">
              <h2>Peach</h2>
              <p>
                The peach (Prunus persica) is a deciduous tree native to the
                region of Northwest China between the Tarim Basin and the north
                slopes of the Kunlun Mountains, where it was first domesticated
                and cultivated. It bears an edible juicy fruit called a peach or
                a nectarine.
              </p>
            </SideCard>
          </Col>
        </Row>

        <Divider orientation="left">Products You Might Like</Divider>
        <ProductCarousel />
      </Layout.Content>
    </Layout>
  );
}

export default App;
