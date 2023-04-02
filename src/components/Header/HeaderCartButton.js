import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
   const numberOfCartItems=cartCtx.item.reduce((curNumber,item)=>{
    return curNumber+item.amount;
   },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <spam className={classes.badge}>{numberOfCartItems}</spam>
    </button>
  );
};
export default HeaderCartButton;
