import React from "react";
import blogImage from "../assets/images/background.jpg";
import { useHistory } from "react-router-dom";
import { Container, Card, Media, Button , Row, Col} from "react-bootstrap"

const AllBlogs = (props) => {

    const history = useHistory();

    const deleteBlog = (blogId) => {
        props.setBlogs(props.blogs.filter((blog) => {
            return blog.id !== blogId;
        }));
    }
    /**
    const handleFavouriteBlog = (blogId) => {
        props.setBlogs(props.blogs[blogId].favourite_blog = true);
        blog.favourite_blog = true
    }**/
    const Blogs = props.blogs.length > 0 ? (
        props.blogs.map(blog => (
            <>
                <Card key={blog.id}>
                    <Card.Header  className="text-right border-0">
                        <Button variant="primary"> + Favourites</Button>||
                        <Button variant="success" onClick={() => history.push(`/editBlog/${blog.id}`)}>Update</Button>||
                        <Button variant="danger" onClick={() =>  deleteBlog(blog.id)}>Delete</Button>
                    </Card.Header>
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
                    <Card.Footer className="border-0">
                        <Container>
                            <Row>
                                <Col className="text-left">Created At: {blog.created_at}</Col>
                                <Col className="text-right"> Author Name: {blog.author}</Col>
                            </Row>
                        </Container>
                    </Card.Footer>
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

export default AllBlogs;
