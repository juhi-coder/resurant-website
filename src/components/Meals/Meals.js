import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvilableMeals from "./AvilableMeals";
const Meals=()=>{
return(
    <Fragment>
        <MealsSummary></MealsSummary>
        <AvilableMeals></AvilableMeals>
    </Fragment>
)
}
export default Meals;