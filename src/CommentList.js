import React from 'react'
import { Query } from 'react-apollo'

import GetPostComments from './Queries/GetPostComments'

import './styles/CommentList.css'

const CommentList = (props) => {
  let postid = props.postid
  return (
    <div className="comments-on-post">
      <Query
        query={GetPostComments}
        variables={{ postid }}
        >
          {({ loading, error, data }) => {
            // console.log('DATA:', data)
            if (loading) return <h1>Loading...</h1>
            // if (error) return <h1>Error: {error}</h1>
            if (error) {
              console.log(error)
              return <h1>Error</h1>
            }
            // console.log('DATA:', data)
            return data.listComments.items.map(({ id, userid, postid, timestamp, body }) => {
              console.log(body)
              return (
                <div key={id} className="comment-wrapper">
                  <p>{body}</p>
                  <p>posted by: {userid}</p>
                  {timestamp && <p>posted on: {timestamp}</p>}
                </div>
              )
            })
          }}
      </Query>
    </div>
  )
}

export default CommentList
