import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import FullPostPage from './FullPostPage'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  render() {
    const { posts } = this.state;

    return (
      <div className='App'>
        <Route path="/post/:id" render={({ match }) => {
          const postsId = match.params.id - 1;

          return <FullPostPage
            post={posts[postsId]}
          />
        }} />
        <Route exact path="/:page?" render={({ match }) => {
          let postsToRender;

          if (match.params.page === undefined) {
            let postsCopy = [].concat(posts);
            postsToRender = postsCopy.slice(0, 10);
          } else {
            let postsToSkip = match.params.page * 10;
            let postsCopy = [].concat(posts);
            postsToRender = postsCopy.slice(0 + postsToSkip, 10 + postsToSkip);
          }

          return <Home
            posts={postsToRender}
          />
        }} />
      </div>
    );
  }
}

export default App