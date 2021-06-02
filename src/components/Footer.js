import React from "react";
import {Container} from "react-bootstrap";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = (props) => {
    return(
        <div className="footer" style={{
            backgroundColor: props.themeState.background,
            color: props.themeState.foreground
        }}>
            <hr/>
            <Container className="text-center">
                <br/>
                <div>
                    <p className="text-muted">Copyright &copy; React Website 2021</p>
                    <p><a href="https://github.com/SiamAnzir/react-blogsite"><FontAwesomeIcon icon={faGithub}/> Source Code </a></p>
                </div>
            </Container>
        </div>
    )
}