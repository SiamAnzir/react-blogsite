import React, {useState} from "react";
import {Container, Jumbotron, Card, Row, Col , Button} from "react-bootstrap";
import bgImage from "../assets/images/blog-listing.jpg";
import blogImage from "../assets/images/background.jpg";

const Home = (props) => {

     const [readMore,setReadMore] = useState({id:null , readMoreState:false});

     const readMoreButton = (blogId) => {
         setReadMore({id:blogId , readMoreState: true});
         console.log(blogId);

     }

    const readLessButton = (blogId) => {
        setReadMore({id:blogId , readMoreState: false});
        console.log(blogId);

    };


    const removeFavBlog = (blogId,selectedBlog) => {
         selectedBlog.favourite_blog = false;
         props.setBlogs(props.blogs.map(blog => (blog.id === blogId ? selectedBlog : blog)));
         console.log(props.blogs);
     };


     const favBlog = props.blogs.map(blog => (blog.favourite_blog === true) ? (
                         <Col className="col-lg-6 col-md-12">
                             <Card style={{ width: '25rem' }} key={blog.id}>
                                 <Card.Img variant="top" alt="Card image" width={300} height={300} src={blogImage}/>
                                 <Card.Body>
                                     <Card.Title>{blog.title}</Card.Title>
                                     {readMore.id === blog.id && readMore.readMoreState ?
                                         (<Card.Text>
                                             {blog.description}
                                             <a className="read-more-link"  onClick={()=>{readLessButton(blog.id)}}><p>Read Less </p></a>
                                         </Card.Text>):
                                         (<Card.Text>
                                             {blog.description.slice(0,40)}
                                             <a className="read-more-link"  onClick={()=>{readMoreButton(blog.id)}}><p>Read More</p></a>
                                         </Card.Text>)

                                     }

                                 </Card.Body>
                                 <Card.Footer className="border-0">
                                     <Row>
                                         <Col className="text-left">Author Name: {blog.author}</Col>
                                         <Col className="text-right"><Button variant="danger" onClick={() => removeFavBlog(blog.id , blog)}>(-)Remove</Button> </Col>
                                     </Row>
                                 </Card.Footer>
                             </Card>
                             <br/>
                         </Col>
                        ) : (
                        <div>
                        </div>
                    ));

    return(
        <section>
            <Jumbotron style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', height: '400px' }} fluid>
                <Container >
                    <h1>React BlogSite</h1>
                    <p className="lead">
                        Create Your Own blog, Update it whenever it needs, Delete it if you don't like it and also Read other's Blog.!!
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <h1>Favourite Blogs: </h1>
                <br/>
                <div>
                    <Row>
                        {favBlog}
                    </Row>
                </div>
            </Container>
        </section>

    );
}

export default Home;
