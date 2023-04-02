import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";
import Meals from "../Meals/Meals";
const Header=(props)=>{

    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="HeaderImage" />
        </div>
        <Meals></Meals>
    </Fragment>
}
export default Header;