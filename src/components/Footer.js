import React from "react";
import {Container} from "react-bootstrap";

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
                </div>
            </Container>
        </div>
    )
}