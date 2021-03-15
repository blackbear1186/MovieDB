import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarRating from './Stars/StarRating'

const TopRated = ({ items, value }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <Container>
      <Row>
        {items.slice(0, 4).map((item) => (
          <Col key={item.id}>
            <Card style={{ width: "13rem" }}>
              <Card.Img src={poster + item.poster_path} />
            </Card>
            <p><strong>Rated: {item.vote_average}</strong></p>
            <StarRating value={item.vote_average}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopRated;
