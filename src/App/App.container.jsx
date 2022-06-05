import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import App from './App';

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const AppContainer = () => (
  <Mutation mutation={SET_CURRENT_USER}>
    {(setCurrentUser) => (
      <Query query={GET_CURRENT_USER}>
        {({ data }) => {
          const { currentUser } = data;
          const setUser = (user) => setCurrentUser({ variables: { user } });

          return <App setCurrentUser={setUser} currentUser={currentUser} />;
        }}
      </Query>
    )}
  </Mutation>
);

export default AppContainer;
