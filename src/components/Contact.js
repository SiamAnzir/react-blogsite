import React from 'react';
import {Container, Row , Col , Image} from "react-bootstrap";
import profilePic from "../assets/images/profilePic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome , faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faCodepen,
    faFacebook,
    faGithub,
    faGitlab,
    faInstagram,
    faLinkedin,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

const ContactPage = (props) => {
    return(
        <section style={{
            backgroundColor: props.themeState.background,
            color: props.themeState.foreground
        }}>
            <Container className="text-center">
                <h2> Contact: </h2>
                <Row className="justify-content-lg-center">
                    <Col>
                        <Image src={profilePic} width={300} height={300} alt="profilePic" roundedCircle/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h4> Mohammed Siam Anzir </h4>
                        <h5> <FontAwesomeIcon icon={faHome} /> Bangladesh </h5>
                        <h6> <FontAwesomeIcon icon={faEnvelope} /> siamanzir18@gmail.com </h6>
                        <br/>
                        <p className="text-muted">Connect with me through ~ </p>
                        <p>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.facebook.com/md.siamanzir/"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.instagram.com/md_siam_anzir/?hl=en"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.linkedin.com/in/mohammed-siam-anzir-087005203/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                        </p>
                        <p className="text-muted">Show my other projects on ~ </p>
                        <p>
                            <a style={{ marginLeft: '.5rem' }} href="https://github.com/SiamAnzir"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://codepen.io/Siam28"><FontAwesomeIcon icon={faCodepen} size="3x" /></a>
                            <a style={{ marginLeft: '.5rem' }} href="https://gitlab.com/SiamAnzir"><FontAwesomeIcon icon={faGitlab} size="3x" /></a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactPage;