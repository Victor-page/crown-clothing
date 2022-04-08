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
  (collections) => convertObjectToArray(collections)
);

const getCollectionSelector = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollection = memoize(getCollectionSelector);
