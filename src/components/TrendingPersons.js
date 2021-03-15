import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const TrendingPersons = ({ persons }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    <Container>
      <Row>
        {persons.slice(0, 4).map((person) => (
          <Col key={person.id}>
            {/* <img 
              style={{ width: '150px'}}
              className='person-img'
              src={poster + person.profile_path}
              alt={person.name}></img>
              <p style={{ color: 'white'}}>
                <strong>{person.name}</strong>
              </p> */}
            <Image
              style={{ borderRadius: "20em" }}
              src={poster + person.profile_path}
              fluid
            />
            <p style={{ color: "white" }}>
              <strong>{person.name}</strong>
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingPersons;
