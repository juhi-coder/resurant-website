import CartIcon from "../Cart/CartIcon";
import classes from'./HeaderCartButton.module.css';

const HeaderCartButton=(props)=>{
return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon} ><CartIcon></CartIcon></span>
<span>Your Cart</span>
<spam className={classes.badge}>0</spam>
</button>

}
export default HeaderCartButton;