import React from 'react'
import { Query } from 'react-apollo'

import AllPostsQuery from './Queries/AllPostsQuery';


const AllPosts = (props) => {
  return (
    <div>
      <h2>All of the posts will go here</h2>
      <Query
        query={AllPostsQuery}
      >
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading...</h1>
          if (error) return <h1>Error: {error}</h1>
          return data.listBlogs.items.map(({userid, title}) => {
            return (
              <div>
                <h3>{title}</h3>
                <h4>by: {userid}</h4>
              </div>
            )
          })
        }}
      </Query>
    </div>
  )
}

export default AllPosts
