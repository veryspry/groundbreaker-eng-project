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
import AllPostsQuery from './Queries/AllPostsQuery';

import history from './history'
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint, // NOTE: does this need to be uri to match the apollo docs?
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey,
    },
    disableOffline: true,
});


// Connect Apollo Client to App and all of its children
// Rehydrated is required when using AWS with apollo-client and react. NOTE: Why??
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

registerServiceWorker()
