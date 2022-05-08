import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
  Button,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const addToCartHandler = () => dispatch(addItem(item));

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

export default CollectionItem;
