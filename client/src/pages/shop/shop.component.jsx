import { useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ match: { path } }) => {
  const dispatch = useDispatch();

  const fetchCollectionsStartHandler = () => dispatch(fetchCollectionsStart());

  const preservedFetchCollectionsStart = useCallback(
    fetchCollectionsStartHandler,
    [dispatch]
  );

  useEffect(() => {
    preservedFetchCollectionsStart();
  }, [preservedFetchCollectionsStart]);

  return (
    <>
      <Route exact path={path} component={CollectionsOverviewContainer} />
      <Route
        path={`${path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </>
  );
};

export default ShopPage;
