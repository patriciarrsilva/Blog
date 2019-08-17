import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Post(props) {
    const { postId, postTitle, postBody } = props

    return (
        <article className="post">
            <h2 className="title">
                <Link to={`/post/${postId}`}>{postTitle}</Link>
            </h2>
            <p className="post-body">{postBody}</p>
        </article>
    )
}

Post.propTypes = {
    postId: PropTypes.number.isRequired,
    postTitle: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired
}

export default Post