import React from "react";
import blogImage from "../assets/images/background.jpg";
import {Navbar, Nav, Form, FormControl, Button, Container, Card, Media} from "react-bootstrap"

const Blogs = (props) => {

    const Blogs = props.blogs.length > 0 ? (
        props.blogs.map(blog => (
            <>
                <Card key={blog.id}>
                    <Card.Header  className="text-center"> Author Name: {blog.author}</Card.Header>
                    <Card.Body>
                        <Media>
                            <img
                                width={90}
                                height={90}
                                className="mr-3"
                                src={blogImage}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>
                                    {blog.description}
                                </Card.Text>
                            </Media.Body>
                        </Media>
                    </Card.Body>
                    <Card.Footer className="text-center">2 days ago</Card.Footer>
                </Card>
                <br/>
            </>
        ))
    ) : (
        <div><h2>There is nothing to show</h2></div>
    )
    return(
        <section>
            <Container>
                <div>
                    <h1> All Blogs: </h1>
                </div>
                {Blogs}
            </Container>
        </section>
    );
}

export default Blogs;
