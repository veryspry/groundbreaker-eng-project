
/*

  https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-react.html

*/


const postModel = {
  __id: 'an id',
  timestamp: 'the current timestamp'
  userid: 'who is this posted by?' // the sort of foreign key
  title: 'a string',
  body: 'a body',
  status: 'draft or published',
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
  "__id": "1",
  "timestamp": "1536806800833",
  "userid": "1",
  "title": "A very nice blog post",
  "body": "An even nicer body",
  "status": "published",
  "comments": []
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
