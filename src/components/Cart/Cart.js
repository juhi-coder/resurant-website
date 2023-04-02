import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart=(props)=>{
 const CartItem=(<ul className={classes['cart-items']}>
 {[{id:'c1', name:'Sushi',amount: 2,price: 12.99}].map((item)=>(<li>{item.name}</li>))}
    </ul>) ;

    return(
        <Modal>
        {CartItem}
            <div className={classes.total}>
                <span>
                    TOTAL AMOUNT
                </span>
                <span>
                    35.5
                </span>
            </div>
            <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>

            </div>
        </Modal>
    )

}
export default Cart;