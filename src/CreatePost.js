import React from 'react'
import './styles/CreatePost.css'


// title
// image URL
// body
// status (draft OR published)

const CreatePost = () => {

  return (
    <div className="card">
      <h3>Create a new blog post</h3>
      <div className="input-wrapper">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="text"
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
    </div>
  )
}



export default CreatePost
