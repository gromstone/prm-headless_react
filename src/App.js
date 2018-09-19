import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { GRAPHCMS_API } from './access.js'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

class App extends Component {
    render() {

        return (
            <ApolloProvider client={client}>
                <Layout/>
            </ApolloProvider>

        );
    }
}

export default App;
