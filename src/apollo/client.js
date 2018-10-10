import AWSAppSyncClient from "aws-appsync";
import AppSync from '../AppSync.js';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';

export default new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint, // NOTE: does this need to be uri to match the apollo docs?
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AppSync.apiKey,
    },
    disableOffline: true,
});
