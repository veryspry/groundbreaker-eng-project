
/*

  https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-react.html

*/


const postModel = {
  uuid: 'an id',
  timestamp: 'the current timestamp'
  userid: 'who is this posted by?' // the sort of foreign key
  title: 'a string',
  body: 'a body',
  published: 'draft or published',
  comments: [
    {
      userid: 'a userid',
      timestamp: 'a timestamp',
      body: 'the body of the comment'
    },
    {
      userid: 'a userid',
      timestamp: 'a timestamp',
      body: 'the body of the comment'
    },
    {
      userid: 'a userid',
      timestamp: 'a timestamp',
      body: 'the body of the comment'
    },
    // comments conitnue etc.....
  ]
}



const sample =

{
  "uuid": "1",
  "timestamp": "1536806800833",
  "userid": "1",
  "title": "A very nice blog post",
  "body": "An even nicer body",
  "published": true,
  "comments": []
}

uuid: "1", timestamp: "1536806800833", userid: "1", title: "A very nice blog post", body: "An even nicer body", published: true, comments: []

const BlogQuery =
{
  `
    uuid: String!

    timestamp: String!
    userid: String!
    title: String!
    body: String!
    published: Boolean!
    comments: [String]!
  `
}

// a sample query:

const getPosts =
  `query GetPosts {
    listBlogs {
      items {
         __id
        timestamp
        userid
        title
        body
        status
        comments {
          userid
          timestamp
          body
        }
      }
    }
  }`


  const mutationExample =
  `
    mutation CreatePost {
      createPost(input: {
          userid: "1"
          timestamp: "December, 31, 2017"
          title: "A real good title"
          body: "a real good body"
          published: true
      }) {
        id
        userid
        timestamp
        title
        body
        published
      }
    }
  `
  const otherMutationExample =
  `
  mutation CreatePost(
    $userid:ID!,
    $timestamp:String!,
    $title:String!,
    $body:String!,
    $published:Boolean!
    ) {
    createPost(input: {
        userid:$userid,
        timestamp:$timestamp,
        title:$title,
        body:$body,
        published:$published
    }) {
      id
      userid
      timestamp
      title
      body
      published
    }
  }
  `
  const sampleInput = `
    {
      "userid": 2,
      "timestamp": "August 31, 2018",
      "title": "A wild ride",
      "body": "A wild body",
      "published": true
    }
  `

// UUID:
  // console.log('ID:', uuidV1());
  // import * as uuidV1 from 'uuid/v1' // timebased uuid --> https://github.com/broofa/node-uuid

  // https://stackoverflow.com/questions/37072341/how-to-use-auto-increment-for-primary-key-id-in-dynamodb




  # Welcome!
#
# This is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# An example query named "GetPost" might look like:
#
#     query GetPost {
#       singlePost(id: 123) {
#         id
#         title
#       }
#     }
#
# An example mutation named "PutPost" might look like:
#

	# Get all posts -->
  query GetPosts {
    listPosts {
      items {
        id
        userid
        timestamp
        title
        body
        published
      }
    }
  }
  # Get single post -->
  query GetPost($id:ID!) {
    getPost(id:$id) {
        id
        userid
        timestamp
        title
        body
        published
    }
  }
  # Get Comments for a post -->
#   query GetPostComments() {
#     listComments() {

#     }
#   }
  # Create a new comment -->
  mutation CreateComment(
  	$userid:ID!,
    $postid:ID!,
    $body:String!
  	) {
    createComment(input:{
      userid:$userid,
			postid:$postid,
      body:$body
    }) {
      id
      userid
      body
    }
  }
	# Create a new post -->
  mutation CreatePost(
    $userid:ID!,
    $timestamp:String!,
    $title:String!,
    $body:String!,
    $published:Boolean!
    ) {
    createPost(input: {
        userid:$userid,
        timestamp:$timestamp,
        title:$title,
        body:$body,
        published:$published
    }) {
      id
      userid
      timestamp
      title
      body
      published
    }
  }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Ctrl+Shift+P (also removes comments)
#       Run Query:  Ctrl+Enter   (or press the play button above)
#   Auto Complete:  Ctrl+Space   (or just start typing)
#

{
  "userid": 2,
  "timestamp": "August 31, 2018",
  "title": "A wild ride",
  "body": "A wild body",
  "published": true,
  "id": "9904bd7e-ffbc-43a5-9ba4-ac3e541b43b0",
  "postid": "9904bd7e-ffbc-43a5-9ba4-ac3e541b43b0",
  "imageUrl": "https://unsplash.com/photos/94BPPwuzTHE"
}
