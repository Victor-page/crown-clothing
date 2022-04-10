import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
  Button,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addToCartHandler = () => addItem(item);

  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <Button onClick={addToCartHandler} inverted>
        Add to cart
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
