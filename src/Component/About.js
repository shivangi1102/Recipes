
import React from 'react'
import { Container , Col, Row, Card} from 'react-bootstrap'


const About = () => {
    return (

        <Container fluid className="text-center mt-5">
  <Row>
    <Col as="h2">About Us</Col>
  </Row>
  <Row>
<Col className="text-center mt-5">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
      .<br></br>he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, <br/>
      as opposed to using 'Content here, content here', making it look like readable English.<br/>
       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model<br/>
        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<br></br> 
        Various versions have evolved over the years, <br></br>sometimes by accident, sometimes on purpose (injected humour and the like).
  </Col>
  </Row>
</Container>
       
    )
}

export default About