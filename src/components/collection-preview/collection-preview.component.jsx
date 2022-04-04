import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  const leaveFirstFourCollectionItems = (_, index) => index < 4;

  const renderCollectionItems = (item) => (
    <CollectionItem key={item.id} item={item} />
  );

  const renderFirstFourCollectionItems = items
    .filter(leaveFirstFourCollectionItems)
    .map(renderCollectionItems);

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">{renderFirstFourCollectionItems}</div>
    </div>
  );
};

export default CollectionPreview;
