import React from 'react'
import { Query, Mutation } from 'react-apollo'

import GetPost from './Queries/GetPost'
import GetPostComments from './Queries/GetPostComments'
import CreateComment from './Mutations/CreateComment'

import CommentList from './CommentList'

const singlePost = (props) => {
  let postid = props.match.params.postid
  return (
    <div>
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
          return (
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        }}
      </Query>

      <Mutation
        mutation={CreateComment}
        variables={{ postid: postid }}
        update={(cache, {data: { createComment }}) => {
          // const { listComments } = cache.readQuery({ query: GetPostComments });
          const test = cache.readQuery({ query: GetPostComments })
          console.log(test);
          // console.log('COMMENTS:', listComments);
          // cache.writeQuery({
          //   query: CreateComment,
          //   data: { listComments: listComments.concat([createComment])}
          // });
        }}
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
