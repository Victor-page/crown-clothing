import { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
  Button,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

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

export default CollectionItem;
