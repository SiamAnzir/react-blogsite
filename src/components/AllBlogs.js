import React, {useState} from "react";
import Blogs from "./BlogLists";
import {blogLists} from "./BlogsData";

const AllBlogs = () => {

    const initialBlogState = {id:null,title:"",description:"",author:""};

    const [blogs , setNewBlogs] = useState(blogLists);
    const [currentBlog, setCurrentBlog] = useState(initialBlogState);
    const [editing,setEditing] = useState(false);

    return(
        <Blogs blogs={blogs}/>
    )
}

export default AllBlogs;