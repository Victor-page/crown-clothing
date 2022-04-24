import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import CartDropdown from './cart-dropdown.component';

const CartDropdownContainer = compose(withRouter)(CartDropdown);

export default CartDropdownContainer;
