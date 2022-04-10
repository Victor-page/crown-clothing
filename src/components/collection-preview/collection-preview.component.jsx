import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  const leaveFirstFourCollectionItems = (_, index) => index < 4;

  return (
    <CollectionPreviewContainer>
      <Title>{title}</Title>
      <Preview>
        {items.filter(leaveFirstFourCollectionItems).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
