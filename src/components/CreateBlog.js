import React, {useState} from "react";
import {Container, Form, Button, Alert, Col, Row, OverlayTrigger,Tooltip} from "react-bootstrap";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreateBlog = ({history,themeState,blogs,setBlogs}) => {

    const [show, setShow] = useState(false);

    const addBlog = (newBlog) => {
        newBlog.id = blogs.length + 1;
        setBlogs([...blogs , newBlog]);
    }

    const initialBlogState = {id:null,title:"",description:"",author:"",created_at:new Date().toDateString(),favourite_blog:false};
    const [newBlogs , setCreatedBlogs] = useState(initialBlogState);

    const handleSubmit = (event) => {
        event.preventDefault();
        addBlog(newBlogs);
        event.target.reset();
        setShow(true);
    }

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setCreatedBlogs({...newBlogs , [name]:value});
    }

    return(
        <section className="mainContent" style={{
            backgroundColor: themeState.background,
            color: themeState.foreground
        }}>
            <Container className="text-center">
                <Alert variant="success" onClose={() => setShow(false)} show={show} dismissible>
                    <Row>
                        <Col>
                            <h5>Blog Created Successfully</h5>
                        </Col>
                        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> See All Blogs </Tooltip>}>
                            <span onClick={() => history.push('/allBlogs')} className="text-right" style={{cursor:"pointer"}}> <FontAwesomeIcon icon={faBars} /> </span>
                        </OverlayTrigger>
                    </Row>
                </Alert>
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
                    <Button variant="success" type="submit" >Create New Blog</Button>
                </Form>
                <br/>
            </Container>
        </section>
    )
}

export default CreateBlog;