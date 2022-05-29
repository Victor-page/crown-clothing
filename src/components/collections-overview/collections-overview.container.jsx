import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) {
          console.log(error);
          return (
            <p>
              Error
              <span role="img" aria-label="Sad smile">
                🙁
              </span>
            </p>
          );
        }
        if (!data) return <p>Not found</p>;

        const { collections } = data;

        return <CollectionsOverview collections={collections} />;
      }}
    </Query>
  );
};

export default CollectionsOverviewContainer;
