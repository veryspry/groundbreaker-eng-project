import React from 'react'
import { Mutation } from 'react-apollo'

import './styles/CreatePost.css'

import CreatePost from './Mutations/CreatePost'

// title
// image URL
// body
// status (draft OR published)

const CreatePost = () => {

  return (

    <Mutation mutation={CreatePost}>
      {(addPost, { data }) => (


        <div className="card">
          <form
            onSubmit={e => {
              e.preventDefault();
              addPost({ variables: {
                userid: 1,
                timestamp: ((new Date).toISOString()),
                title,
                body,
                published
              } })
            }}
            >
            <h3>Create a new blog post</h3>
            <div className="input-wrapper">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                ref={node => title = node}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                id="imageUrl"
                type="text"
                ref={node => imageUrl = node}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="body">Body</label>
              <textarea
                id="body"
                type="text"
                className="input-post-body"
              />
            </div>
            <div className="btn-wrapper">
              <button>Save Draft</button>
              <button>Publish Draft</button>
            </div>
          </form>
        </div>



      )}
    </Mutation>


  )
}



export default CreatePost
