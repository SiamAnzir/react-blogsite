import React, {useState} from "react";
import blogImage from "../assets/images/background.jpg";
import { useHistory } from "react-router-dom";
import { Container, Card, Media, Button , Row, Col} from "react-bootstrap"
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBan, faPenAlt, faPlus,faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const AllBlogs = (props) => {

    const history = useHistory();

    const blogsPerPage = 2;
    const [ activePage, setCurrentPage ] = useState( 1 );

    const indexOfLastBlog  = activePage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs     = props.blogs.slice( indexOfFirstBlog, indexOfLastBlog );

    const handlePageChange = ( pageNumber ) => {
        setCurrentPage( pageNumber);
    };

    const deleteBlog = (blogId) => {
        props.setBlogs(props.blogs.filter((blog) => {
            return blog.id !== blogId;
        }));
    }

    const addToFavouriteBlog = (blogId,selectedBlog) => {
        selectedBlog.favourite_blog = true;
        props.setBlogs(props.blogs.map(blog => (blog.id === blogId ? selectedBlog : blog)));
    }
    const removeFromFavouriteBlog = (blogId,selectedBlog) => {
        selectedBlog.favourite_blog = false;
        props.setBlogs(props.blogs.map(blog => (blog.id === blogId ? selectedBlog : blog)));
    }

    const Blogs = props.blogs.length > 0 ? (
        currentBlogs.map(blog => (
            <>
                <Card key={blog.id} border="info" style={{
                    backgroundColor: props.themeState.background,
                    color: props.themeState.foreground
                }}>
                    <Card.Header  className="text-right border-0">
                        {(blog.favourite_blog === false ?  (
                        <Button variant="primary" style={{ marginLeft: '.5rem' }} onClick={() => addToFavouriteBlog(blog.id,blog)}><FontAwesomeIcon icon={faPlus} /> To Favourites </Button>
                        ) : (
                        <Button variant="warning" style={{ marginLeft: '.5rem' }} onClick={() => removeFromFavouriteBlog(blog.id,blog)}><FontAwesomeIcon icon={faBan} /> from Favourites </Button>
                        ))}
                        <Button variant="success" style={{ marginLeft: '.5rem' }} onClick={() => history.push(`/editBlog/${blog.id}`)}><FontAwesomeIcon icon={faPenAlt} /> Update</Button>
                        <Button variant="danger" style={{ marginLeft: '.5rem' }} onClick={() =>  deleteBlog(blog.id)}> <FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
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
        <section style={{
            backgroundColor: props.themeState.background,
            color: props.themeState.foreground
        }}>
            <Container className="pt-2">
                <div>
                    <h1 className="text-center"> All Blogs: </h1>
                </div>
                <br/>
                {Blogs}
            </Container>
            <Container className="pt-2 mt-3">
                <Row className="text-center">
                    <Pagination
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        activePage={ activePage }
                        itemsCountPerPage={ 2 }
                        totalItemsCount={ props.blogs.length }
                        pageRangeDisplayed={ 5 }
                        onChange={ handlePageChange }
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                    />
                </Row>
            </Container>
        </section>
    );
}

export default AllBlogs;
