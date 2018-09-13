import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

// Components:
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import SinglePost from './SinglePost'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/posts" component={AllPosts} />
      <Route exact path="/posts/create" component={CreatePost} />
      <Route exact path="/posts/:postid" component={SinglePost} />
    </Switch>
  )
}

export default withRouter(Routes)
