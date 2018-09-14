import React from 'react'
import { Query, Mutation } from 'react-apollo'

import GetPost from './Queries/GetPost'
import GetPostComments from './Queries/GetPostComments'
import CreateComment from './Mutations/CreateComment'

import CommentList from './CommentList'
import PostNameList from './PostNameList'

// Apollo cache needs to auto updated on comment post...
// Otherwise, you will need to refresh to see the new comment

const singlePost = (props) => {
  let postid = props.match.params.postid
  return (
    <div>

      <PostNameList />

      <Query
        query={GetPost}
        variables={{ id: postid }}
        >
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading...</h1>
          // if (error) return <h1>Error: {error}</h1>
          if (error) {
            console.log(error)
            return <h1>Error</h1>
          }
          let post = data.getPost
          console.log(post);
          return (
            <div>
              {/* <img src="https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60a351868d0839e686c8c5a286265f8d&auto=format&fit=crop&w=500&q=60" /> */}
              <img src={post.imageUrl ? post.imageUrl : "/img/default.jpg"} />
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        }}
      </Query>

      <Mutation
        mutation={CreateComment}
        variables={{ postid: postid }}
        >
        {createComment => (
            <form
              onSubmit={e => {
                e.preventDefault();
                createComment({ variables: {
                  userid: 1, // currently hardcoded to one user
                  postid: postid,
                  timestamp: (new Date()).toISOString(),
                  body: this.body.value || '',
                }});
                this.body.value = '';
              }}
              >
              <div className="input-wrapper">
                <label htmlFor="body">Comment:</label>
                <input
                  id="body"
                  type="text"
                  ref={node => this.body = node}
                />
              </div>
              <div className="btn-wrapper">
                <button type="submit" >Post Comment</button>
              </div>
            </form>
          )}
      </Mutation>

      <CommentList postid={props.match.params.postid}/>
    </div>
  )
}

export default singlePost
