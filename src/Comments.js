import React, { Component } from 'react'
import ListComments from './ListComments';
import CreateComment from './CreateComment';

class Comments extends Component {
    state = {
        query: '',
        comments: ["Comment0", "Comment1", "Comment2"]
    }

    removeComment = (comment) => {
        this.setState(state => ({
            comments: state.comments.filter(c => c !== comment)
        }))
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query.length) {
            const commentsCopy = [].concat(this.state.comments);
            commentsCopy.push(this.state.query);
            this.setState({ comments: commentsCopy });
            this.setState({ query: '' });
        }
    }

    render() {
        const { comments, query } = this.state

        return (
            <section>
                <h2 className="title title-comments">Comments</h2>
                <ListComments comments={comments} onDeleteComment={this.removeComment} />
                <CreateComment query={query} updateQuery={this.updateQuery} handleSubmit={this.handleSubmit} />
            </section>
        )
    }
}

export default Comments