import React from 'react';
import {Container, Row , Col , Image} from "react-bootstrap";
import profilePic from "../assets/images/profilePic.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const contactPage = () => {
    return(
        <section>
            <Container className="text-center">
                <h2> Contact: </h2>
                <Row className="justify-content-lg-center">
                    <Col xs={6} md={4}>
                        <Image src={profilePic} width={300} height={300} alt="profilePic" roundedCircle/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4> Mohammed Siam Anzir </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={faHome} />
                        <h5> Bangladesh </h5>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default contactPage;