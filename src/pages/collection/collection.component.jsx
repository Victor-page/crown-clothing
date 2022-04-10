import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  Title,
  ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <Title>{title}</Title>
    <ItemsContainer>
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </ItemsContainer>
  </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
