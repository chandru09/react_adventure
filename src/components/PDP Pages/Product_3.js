import React from "react";
import "./PDP.css";
import { data_3 } from "../../data/similar_destination_data";
import { Link } from "react-router-dom";

import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import StarRating from "../StarRating";
import { pdp_data_2 } from "../../data/pdp_data";

function Product_3({ addCart }) {
  return (
    <>
      <Container className="prod_container">
        {/* Two splits Image & Content */}
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1467830839049-11173e7b2755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                  alt="First Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Second slide"
                  height="307px"
                  width="546px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1599133536350-eb073a2d9477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Third slide"
                  height="307px"
                  width="546px"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* Right Contents */}
          {pdp_data_2.map((item) => (
            <Col lg={6} md={6} sm={12}>
              <h3>{item.label}</h3>
              <h1>{item.text}</h1>
              <p>
                Content is the lifeblood of your adventure travel company. It’s
                what drives your inbound and outbound marketing efforts, cutting
                through the noise to speak with your unique voice. You have a
                rare, experience-based service. People need to connect to it
                before they’re willing to raise their hand and become a lead,
                let alone before they book.
                <br /> A well-constructed content strategy will drive every
                aspect of your customer lifecycle, building trust to convert
                leads and transforming current customers into recurring brand
                champions.
              </p>
              {/* Star Ratings */}
              <Row className="star_rating">
                <Col lg={4}>
                  <h4 style={{ textAlign: "center" }}>Ratings :</h4>
                </Col>
                <Col lg={4}>
                  <StarRating />
                </Col>
              </Row>
              <Row className="row_btns">
                <Col lg={6} md={12}>
                  <button className="pdp_btns">
                    <Link to="get">COUPONS</Link>
                  </button>
                </Col>
                <Col lg={6} md={12}>
                  <button
                    className="pdp_btns"
                    onClick={() => addCart(item.src, item.label, item.text)}
                  >
                    ADD TO CART
                  </button>
                </Col>
              </Row>
              {/* Icon container starts */}
              <h2>Accomodations</h2>
              <Row className="icon_container">
                <Col lg={4} md={2}>
                  <img
                    // src="https://cdn-icons.flaticon.com/png/512/562/premium/562678.png?token=exp=1644856648~hmac=3d68b92b60abe02ace6111deb09d5b07"
                    src="https://img.icons8.com/color/344/camping-tent.png"
                    width="50px"
                    alt="Food"
                  />
                </Col>
                <Col lg={4} md={2}>
                  <img
                    src="https://img.icons8.com/color/344/fondue.png"
                    width="50px"
                    alt="Hotel"
                  />
                </Col>
                <Col lg={4} md={2}>
                  <img
                    src="https://img.icons8.com/color/344/car--v1.png"
                    width="50px"
                    alt="Travel"
                  />
                </Col>
              </Row>
              {/* Icon container ends */}
              <h2 className="ic_spot">Iconic Spot!</h2>
              <div className="spot">
                <div className="spot_card">
                  <img src={item.src} alt="ic_spot" />
                  <div className="spot_info">
                    <h1>Maldives</h1>
                    <p>
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
          {/* Right contents End */}
        </Row>
        {/* ends */}
        {/* Similar Destinations */}
        <h2 className="dest_text">Similar Destinations</h2>

        <Row>
          {data_3.map((item) => (
            <Col lg={4} md={4}>
              <Card className="dest_cards" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Title>{item.label}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Link to={item.view}>
                    <button className="dest_button" variant="primary">
                      View More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Product_3;
