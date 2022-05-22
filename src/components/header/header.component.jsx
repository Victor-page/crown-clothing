import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  const signOutHandler = () => auth.signOut();

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutHandler}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
