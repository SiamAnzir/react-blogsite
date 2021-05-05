import React, {useState,useEffect} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const EditBlog = (props) => {

    const history = useHistory();

    const [ updatedBlog, setBlog ] = useState(props.currentBlog);

    useEffect(
        () => {
            setBlog(props.currentBlog)
        },
        [props]
    )

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setBlog({ ...updatedBlog , [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateBlog(updatedBlog.id, updatedBlog);
        history.push('/allBlogs');
    }
    return(
        <section>
            <Container className="text-center">
                <br/>
                <h2>Edit</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Author Name: </Form.Label>
                        <Form.Control name="author" autoComplete="off" required type="text" value={updatedBlog.author} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label> Blog Title </Form.Label>
                        <Form.Control name="title" autoComplete="off" required type="text" value={updatedBlog.title} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Blog Description </Form.Label>
                        <Form.Control as="textarea" rows={7} name="description" autoComplete="off" required type="text" value={updatedBlog.description} onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="success" type="submit">Update User</Button>   <Button variant="danger" onClick={() => ( history.push('/allBlogs'))}> Cancel </Button>
                </Form>
            </Container>
        </section>
    )
}

export default EditBlog;