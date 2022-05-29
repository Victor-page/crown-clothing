import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  const leaveFirstFourCollectionItems = (_, index) => index < 4;

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.filter(leaveFirstFourCollectionItems).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
