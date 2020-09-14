import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        </div>
        <CustomButton>GOT TO CHECKOUT</CustomButton>
    </div>
);

export default Cart;