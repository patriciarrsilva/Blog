import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Post from './Post'

class Home extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    }

    state = {
        pages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    render() {
        const { posts } = this.props
        const { pages } = this.state

        return (
            <div className="home">
                <h1 className="title title-blog">Blog</h1>
                {posts.map((post, i) => <Post key={i} postId={post.id} postTitle={post.title} postBody={post.body} />)}
                <ol>
                    {pages.map((page, i) =>
                        <li key={i}><Link to={`/${page}`}>{page + 1}</Link></li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Home