import React, {useState} from "react";
import {blogLists} from "./BlogsData";
import {Container, Form, Button} from "react-bootstrap";
import Blogs from "./BlogLists";

const CreateBlog = () => {

    const [blogs , setNewBlogs] = useState(blogLists);

    const initialBlogState = {id:null,title:"",description:"",author:""};
    const [newBlogs , setCreatedBlogs] = useState(initialBlogState);

    const addBlog = (newBlog) => {
        newBlog.id = blogs.length + 1;
        setNewBlogs([...blogs , newBlog]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addBlog(newBlogs);
        event.target.reset();
    }

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setCreatedBlogs({...newBlogs , [name]:value});
    }


    return(
        <section>
            <Container className="text-center">
                <br/>
                <h2>Create Your Blog</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Author Name: </Form.Label>
                        <Form.Control name="author" autoComplete="off" required type="text" placeholder="write your name" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label> Blog Title </Form.Label>
                        <Form.Control name="title" autoComplete="off" required type="text" placeholder="Give a proper title for your Blog" onChange={handleInputChange} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Blog Description </Form.Label>
                        <Form.Control as="textarea" rows={7} name="description" autoComplete="off" required type="text" placeholder="Describe Your Blog here" onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="success" type="submit">Create New Blog</Button>
                </Form>
                <Blogs blogs={blogs}/>
            </Container>
        </section>
    )
}

export default CreateBlog;