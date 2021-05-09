import React from "react";
import {Container, Jumbotron, Card, CardGroup, Row, Col} from "react-bootstrap";
import bgImage from "../assets/images/blog-listing.jpg";
import blogImage from "../assets/images/background.jpg";

const Home = (props) => {

     const favBlog = props.blogs.map(blog => (blog.favourite_blog === true) ? (
                         <Col className="col-lg-6 col-md-12">
                             <Card style={{ width: '25rem' }}>
                                 <Card.Img variant="top" alt="Card image" width={300} height={300} src={blogImage} />
                                 <Card.Body>
                                     <Card.Title>{blog.title}</Card.Title>
                                     <Card.Text>
                                         {blog.description}
                                     </Card.Text>
                                 </Card.Body>
                                 <Card.Footer className="text-right">
                                     <small className="text-muted">Author Name: {blog.author}</small>
                                 </Card.Footer>
                             </Card>
                         </Col>
                        ) : (
                        <div>
                        </div>
                    ));

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
                <br/>
                <div>
                    <Row>
                        {favBlog}
                    </Row>
                </div>
            </Container>
        </section>

    );
}

export default Home;
