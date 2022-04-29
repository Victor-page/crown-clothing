import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

import { convertObjectToArray } from './shop.utils';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? convertObjectToArray(collections) : [])
);

const getCollectionSelector = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections ? collections[collectionUrlParam] : null;
  });

export const selectCollection = memoize(getCollectionSelector);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) =>
  Boolean(shop.collections)
);
