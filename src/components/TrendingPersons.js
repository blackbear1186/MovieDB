import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TrendingPersons = ({ persons }) => {
  const poster = "https://image.tmdb.org/t/p/original/";

  return (
    // <div className="container-person">
    //   {persons.slice(0, 4).map((person) => (
    //     <div className="person">
    //       <img
    //         style={{ width: "150px" }}
    //         className="person-img"
    //         src={poster + person.profile_path}
    //         alt={person.name}
    //       ></img>
    //       <p style={{ color: "white" }}>
    //         <strong>{person.name}</strong>
    //       </p>
    //     </div>
    //   ))}
    // </div>
    <Container>
      <Row>
        {persons.slice(0, 4).map((person) => (
          <Col>
            <img 
              style={{ width: '150px'}}
              className='person-img'
              src={poster + person.profile_path}
              alt={person.name}></img>
              <p style={{ color: 'white'}}>
                <strong>{person.name}</strong>
              </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingPersons;
