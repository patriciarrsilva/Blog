import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import About from './About'
import Comments from './Comments'

function FullPostPage(props){
    return (
        <div>
            <Link className="close-post" to="/">Close</Link>
            <div className="flex-container">
                <Post postId={props.post.id} postTitle={props.post.title} postBody={props.post.body} />
                <About />
            </div>
            <Comments />
        </div>
    );
}

export default FullPostPage