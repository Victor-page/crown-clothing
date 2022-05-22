import { createContext } from 'react';

import SHOP_DATA from './shop.data';
import { convertObjectToArray } from './collections.utils';

const collectionsContextValues = {
  collections: SHOP_DATA,
  collectionsForPreview: convertObjectToArray(SHOP_DATA),
};

const CollectionsContext = createContext(collectionsContextValues);

export default CollectionsContext;
