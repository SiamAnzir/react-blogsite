import React, {useState} from "react";
import Blogs from "./BlogLists";

const AllBlogs = () => {
    const blogLists = [
        {
            id:1,
            title:"Man must explore, and this is exploration at its greatest",
            description: "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",
            author:"Siam"
        },
        {
            id:2,
            title:"Problems look mighty small from 150 miles up",
            description: "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",
            author:"Anzir"
        },
    ]

    const initialBlogState = {id:null,title:"",description:"",author:""};

    const [blogs , setNewBlogs] = useState(blogLists);
    const [currentBlog, setCurrentBlog] = useState(initialBlogState);
    const [editing,setEditing] = useState(false);

    return(
        <Blogs blogs={blogs}/>
    )
}

export default AllBlogs;