import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

// Components:
import CreatePost from './CreatePost'
import AllPosts from './AllPosts'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPosts} />
      <Route exact path="/posts/create" component={CreatePost} />
    </Switch>
  )
}

export default withRouter(Routes)
