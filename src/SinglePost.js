import React from 'react'
import { Query } from 'react-apollo'

import GetPost from './Queries/GetPost'
import GetPostComments from './Queries/GetPostComments'

import CommentList from './CommentList'

const singlePost = (props) => {
  return (
    <div>
      <Query
        query={GetPost}
        variables={{ id: props.match.params.postid }}
        >
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading...</h1>
          // if (error) return <h1>Error: {error}</h1>
          if (error) {
            console.log(error)
            return <h1>Error</h1>
          }
          let post = data.getPost
          return (
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        }}
      </Query>
      <CommentList postid={props.match.params.postid}/>
    </div>
  )
}

export default singlePost
