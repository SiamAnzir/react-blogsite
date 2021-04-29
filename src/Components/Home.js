import React from "react";
import {Container , Jumbotron } from "react-bootstrap";
import bgImage from "../assets/images/blog-listing.jpg";

const Home = () => {
    return(
        <section>
            <Jumbotron style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', height: '400px' }} fluid>
                <Container >
                    <h1>React BlogSite</h1>
                    <p className="lead">
                        Create Your Own blog, Update it whenever it needs, Delete it if you don't like it and also Read other's Blog.!!
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <h1>Favourite Blogs: </h1>
            </Container>
        </section>

    );
}

export default Home;
