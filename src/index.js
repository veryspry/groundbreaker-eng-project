import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import history from './history'
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import client from './apollo/client'

// import * as AWS from 'aws-sdk';
// import gql from 'graphql-tag'


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
