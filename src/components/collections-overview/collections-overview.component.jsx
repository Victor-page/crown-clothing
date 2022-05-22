import { useContext } from 'react';

import CollectionsContext from '../../contexts/collections/collections.context';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = () => {
  const { collectionsForPreview } = useContext(CollectionsContext);

  return (
    <CollectionsOverviewContainer>
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
