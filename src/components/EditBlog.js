import React, {useState,useEffect} from "react";
import {Button, Container, Form} from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditBlog = ({history, blogs , setBlogs}) => {
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
        history.push('/allBlogs');
    }
    return(
        <section>
            <Container className="text-center">
                <br/>
                <h2>Update Your Blog</h2>
                <Form onSubmit={handleSubmit}>
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
            </Container>
        </section>
    )
}

export default EditBlog;