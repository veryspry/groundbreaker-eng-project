import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
import { graphql, ApolloProvider, compose } from 'react-apollo';
import * as AWS from 'aws-sdk';
import AppSync from './AppSync.js';


import gql from 'graphql-tag' // this is what AWS docs use
// import gql from 'apollo-boost'

// Queries:
// import AllPostsQuery from './Queries/AllPostsQuery';

import history from './history'
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { awsKey } from './secrets'


const AllPostsQuery = gql`
  query AllPosts {
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
  }
`

const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey,
    },
    disableOffline: true,
});

// Connect Apollo Client to App and all of its children
const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);


ReactDOM.render(
  <Router history={history}>
    <WithProvider />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();

const AllPostsWithData = compose(
  graphql(AllPostsQuery, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
      posts: props.data // NOTE: this is probably incomplete
    })
  })
)
