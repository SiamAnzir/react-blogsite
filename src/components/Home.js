import React, {useState} from "react";
import {Container, Jumbotron, Card, Row, Col, Button} from "react-bootstrap";
import bgImage from "../assets/images/blog-listing.jpg";
import blogImage from "../assets/images/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBan, faBars, faPlus} from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {

     const [readMore,setReadMore] = useState({id:null , readMoreState:false});

     const readMoreButton = (blogId) => {
         setReadMore({id:blogId , readMoreState: true});
     }

     const readLessButton = (blogId) => {
        setReadMore({id:blogId , readMoreState: false});
    };


     const removeFavBlog = (blogId,selectedBlog) => {
         selectedBlog.favourite_blog = false;
         props.setBlogs(props.blogs.map(blog => (blog.id === blogId ? selectedBlog : blog)));
     };

     const favBlog = props.blogs.map(blog => (blog.favourite_blog === true) ? (
                         <Col>
                             <Card border="info" style={{
                                 width: '25rem',
                                 backgroundColor: props.themeState.background,
                                 color: props.themeState.foreground
                             }}  key={blog.id}>
                                 <Card.Img variant="top" alt="Card image" width={300} height={300} src={blogImage}/>
                                 <Card.Body>
                                     <Card.Title>{blog.title}</Card.Title>
                                     {readMore.id === blog.id && readMore.readMoreState ?
                                         (<Card.Text>
                                             {blog.description}
                                             <span className="read-more-link"  onClick={()=>{readLessButton(blog.id)}}><p>Read Less </p></span>
                                         </Card.Text>):
                                         (<Card.Text>
                                             {blog.description.slice(0,40)}
                                             <span className="read-more-link"  onClick={()=>{readMoreButton(blog.id)}}><p>Read More</p></span>
                                         </Card.Text>)

                                     }

                                 </Card.Body>
                                 <Card.Footer className="border-0">
                                     <Row>
                                         <Col className="text-left">Author Name: {blog.author}</Col>
                                         <Col className="text-right"><Button variant="danger" onClick={() => removeFavBlog(blog.id , blog)}><FontAwesomeIcon icon={faBan} /> Remove</Button> </Col>
                                     </Row>
                                 </Card.Footer>
                             </Card>
                             <br/>
                         </Col>
                        ) : (
                        <div>
                        </div>
                    ));

    const countFavBlog = [];
    props.blogs.map(blog => (blog.favourite_blog === true) ? ( countFavBlog.push(blog) ) : ( countFavBlog ) );

    return(
        <section className="mainContent" style={{
            backgroundColor: props.themeState.background,
        }}>
            <Jumbotron style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', height: '400px' }} fluid>
                <Container>
                    <h1>React BlogSite</h1>
                    <p className="lead">
                        Create Your Own blog, Update it whenever it needs, Delete it if you don't like it and also Read other's Blog.!!
                    </p>
                    <p>
                        Currently This Blog Site using your Browser Local Storage for saving your blogs. Also it has some initialized blogs which was given as examples.
                    </p>
                </Container>
            </Jumbotron>
            <Container className="col-lg-8 col-md-10 mx-auto" style={{
                color: props.themeState.foreground
            }}>
                <h1>Favourite Blogs: </h1>
                <br/>
                <div>
                    {
                        (countFavBlog.length > 0) ? (
                            <Row>
                                {favBlog}
                            </Row>
                        ) : (
                            <Card className="text-center" border="info" style={{
                                backgroundColor: props.themeState.background,
                                color: props.themeState.foreground
                            }}>
                                <Card.Body>
                                    <p><FontAwesomeIcon icon={faBars} /> Favourite Blog List is Empty </p>
                                    <p><a href="/allBlogs"> <FontAwesomeIcon icon={faPlus} />  Add Blogs to Favourites </a></p>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </Container>
        </section>

    );
}

export default Home;
