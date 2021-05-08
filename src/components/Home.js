import React from "react";
import {Container , Jumbotron,Card } from "react-bootstrap";
import bgImage from "../assets/images/blog-listing.jpg";

const Home = () => {

    /**
     * //const favBlog = props.blogs.map(blog => blog);
     * {props.blogs.map(blog => blog.favourite_blog === true) ? (
                        <Card>
                            <Card.Header>
                                {favBlog.title}
                            </Card.Header>
                            <Card.Body>
                                {favBlog.body}
                            </Card.Body>
                        </Card>
                        ) : (
                        <div>
                            <h5>No Blog Added to favourites</h5>
                        </div>
                    )
                    } **/
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
                <div>

                </div>
            </Container>
        </section>

    );
}

export default Home;
