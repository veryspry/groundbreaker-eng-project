import React from 'react'
import { Query } from 'react-apollo'
import * as moment from 'moment' // Date parser --> http://momentjs.com/docs/

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
            if (loading) return <h1>Loading...</h1>
            // if (error) return <h1>Error: {error}</h1>
            if (error) {
              console.log(error)
              return <h1>Error</h1>
            }
            // console.log('DATA:', data)
            return data.listComments.items.map(({ id, userid, postid, timestamp, body }) => {
              console.log(moment(timestamp).format("YYYY-MM-DD HH:mm"))
              return (
                <div key={id} className="comment-wrapper">
                  <p>{body}</p>
                  <p>posted by: {userid}</p>
                  {timestamp && <p>posted on: {moment(timestamp).format("YYYY-MM-DD HH:mm")}</p>}
                </div>
              )
            })
          }}
      </Query>
    </div>
  )
}

export default CommentList
