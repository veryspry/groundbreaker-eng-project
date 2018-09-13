import React from 'react'
import { Query } from 'react-apollo'

import GetPost from './Queries/GetPost'

const singlePost = (props) => {
  console.log('URL ID', props.match.params.postid);
  return (
    <div>
      {/* <h2>{this.props.match.params.}</h2> */}
      <Query
        query={GetPost}
        variables={{ postid: props.match.params.postid }}
        >
      </Query>
    </div>
  )
}

export default singlePost
