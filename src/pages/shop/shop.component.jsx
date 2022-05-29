import React from 'react';
import { Route } from 'react-router-dom';

import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match: { path } }) => (
  <div className="shop-page">
    <Route exact path={`${path}`} component={CollectionsOverview} />
    <Route path={`${path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
