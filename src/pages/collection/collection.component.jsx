import { useContext } from 'react';

import CollectionsContext from '../../contexts/collections/collections.context';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  Title,
  ItemsContainer,
} from './collection.styles';

const CollectionPage = ({
  match: {
    params: { collectionId },
  },
}) => {
  const { collections } = useContext(CollectionsContext);
  const collection = collections[collectionId];
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
