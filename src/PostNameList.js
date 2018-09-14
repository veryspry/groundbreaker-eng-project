import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import GetPublishedPosts from './Queries/GetPublishedPosts'

const PostNameList = () => {

  return (
    <div>
      <Query query={GetPublishedPosts}>

        { ({ loading, error, data }) => {
          console.log('DATA IN LIST:', data);
          if (loading) return <h1>Loading...</h1>
          if (error) {
            console.log('Error:', error);
            return <h1>Error Loading</h1>
          }

          return data.listPosts.items.map(({ id, userid, title, timestamp }) => {
            return (
              <NavLink to={`/posts/${id}`} >
                <p>{title}</p>
              </NavLink>
            )
          })
        }}

      </Query>
    </div>
  )
}



export default PostNameList
