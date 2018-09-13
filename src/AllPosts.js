import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import * as moment from 'moment' // Date parser --> http://momentjs.com/docs/
import * as uuidV1 from 'uuid/v1' // timebased uuid --> https://github.com/broofa/node-uuid

import './styles/AllPosts.css'

import AllPostsQuery from './Queries/AllPostsQuery';

/*
  NOTE: Fix date issue as soon as I can get a proper date format into the DB

  Setup: https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-react.html
*/


const AllPosts = (props) => {
  return (
    <div>
      <h2>All of the posts will go here</h2>
      <Query
        query={AllPostsQuery}
        >
        {({ loading, error, data }) => {
          console.log('DATA:', data)
          if (loading) return <h1>Loading...</h1>
          if (error) return <h1>Error: {error}</h1>
          return data.listPosts.items.map(({ id, userid, title, timestamp }) => {
            // console.log('DATE:', moment((Number(timestamp)), 'MMMM DD YYYY'));
            return (
              <div
                className="post-wrapper"
                key={id}
                >
                <Link
                  to={`/posts/${id}`}>{title}</Link>
                <h4>written by: {userid}</h4>
                {/* <h4>published on: {moment().format(timestamp)}</h4> */}
                {/* <h4>published on: {moment(Number(timestamp))._d}</h4> */}
              </div>
            )
          })
        }}
      </Query>
    </div>
  )
}

export default AllPosts
