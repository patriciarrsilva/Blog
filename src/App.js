import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import FullPostPage from './FullPostPage'

class App extends Component {
  state = {
    posts: [],
    postsToSkip: 0,
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  /* componentDidUpdate(prevProps, prevState, snapshot) {
       const postsCopy = [].concat(this.state.posts);
       postsCopy.slice(0 + this.state.postsToSkip, 10 + this.state.postsToSkip);
       this.setState({ posts: postsCopy });
     } */

  render() {
    const { posts, postsToSkip } = this.state;

    return (
      <div className='App'>
        <Route path="/post/:id" render={({ match }) => (
          <FullPostPage
            post={posts[match.params.id]}
          />
        )} />
        <Route exact path="/:page?" render={({ match }) => (
          <Home
            posts={posts}
            postsToSkip={postsToSkip}
            routeProps={match}
          />
        )} />
      </div>
    );
  }
}

export default App