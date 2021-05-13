import React, {useState} from "react";
import blogImage from "../assets/images/background.jpg";
import { useHistory } from "react-router-dom";
import { Container, Card, Media, Button , Row, Col} from "react-bootstrap"
import Pagination from "react-js-pagination";

const AllBlogs = (props) => {

    const history = useHistory();

    const blogsPerPage = 2;
    const [ activePage, setCurrentPage ] = useState( 1 );

    // Logic for displaying current todos
    const indexOfLastBlog  = activePage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs     = props.blogs.slice( indexOfFirstBlog, indexOfLastBlog );

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber )
    };

    const deleteBlog = (blogId) => {
        props.setBlogs(props.blogs.filter((blog) => {
            return blog.id !== blogId;
        }));
    }

    const addToFavouriteBlog = (blogId,selectedBlog) => {
        selectedBlog.favourite_blog = true;
        props.setBlogs(props.blogs.map(blog => (blog.id === blogId ? selectedBlog : blog)));
        console.log(props.blogs);
    }
    const removeFromFavouriteBlog = (blogId,selectedBlog) => {
        selectedBlog.favourite_blog = false;
        props.setBlogs(props.blogs.map(blog => (blog.id === blogId ? selectedBlog : blog)));
        console.log(props.blogs);
    }

    const Blogs = props.blogs.length > 0 ? (
        currentBlogs.map(blog => (
            <>
                <Card key={blog.id}>
                    <Card.Header  className="text-right border-0">
                        {(blog.favourite_blog === false ?  (
                        <Button variant="primary" onClick={() => addToFavouriteBlog(blog.id,blog)}> (+) To Favourites </Button>
                        ) : (
                        <Button variant="warning" onClick={() => removeFromFavouriteBlog(blog.id,blog)}> (-) from Favourites </Button>
                        ))} ||
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
                    <h1 className="text-center"> All Blogs: </h1>
                </div>
                <br/>
                {Blogs}
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
