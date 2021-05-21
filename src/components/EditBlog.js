import React, {useState} from "react";
import {Alert, Button, Container, Form, Row,Col} from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditBlog = ({history, themeState, blogs , setBlogs}) => {

    const [show, setShow] = useState(false);
    const { id } = useParams();
    const blogToEdit = blogs[id - 1];
    const [currentBlog, setCurrentBlog] = useState(blogToEdit);

    const updateBlog = ( id , updatedBlog) => {
        setBlogs(blogs.map(blog => (blog.id === id ?  updatedBlog  : blog)));
    }
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCurrentBlog({ ...currentBlog , [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBlog(currentBlog.id, currentBlog);
        setShow(true);
    }
    return(
        <section style={{
            backgroundColor: themeState.background,
            color: themeState.foreground
        }}>
            <Container className="text-center">
                <Alert variant="success" onClose={() => setShow(false)} show={show}>
                    <Row>
                        <Col>
                            <h5>Blog Updated Successfully</h5>
                        </Col>
                        <p className="text-right"><a href="/allBlogs">Go Back</a></p>
                    </Row>
                </Alert>
                <br/>
                <h2>Update Your Blog</h2>
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Label> Author Name: </Form.Label>
                        <Form.Control name="author" autoComplete="off" required type="text" value={currentBlog.author} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label> Blog Title </Form.Label>
                        <Form.Control name="title" autoComplete="off" required type="text" value={currentBlog.title} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Blog Description </Form.Label>
                        <Form.Control as="textarea" rows={7} name="description" autoComplete="off" required type="text" value={currentBlog.description} onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="success" type="submit">Update Blog</Button>   <Button variant="danger" onClick={() => ( history.push('/allBlogs'))}> Cancel </Button>
                </Form>
                <br/>
            </Container>
        </section>
    )
}

export default EditBlog;