import classes from './AvilableMeals.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem';
const DUMMY_MEALS=[
    {
        id:'m1',
        name:'fish',
        description:'Finest Fish and Vegish',
        price:150,

    },
    {
        id:'m2',
        name:'maggi',
        description:'Tasty Maggie ',
        price:100,

    },
    {
        id:'m3',
        name:'chilen biryani',
        description:'Hydrawadi chiken biryani',
        price:90,

    },
    {
        id:'m4',
        name:'Paneer butter masala',
        description:'top veges',
        price:250,

    },

]
const AvilableMeals=()=>{
const mealsList=DUMMY_MEALS.map((meal)=><li><MealItem 
key={meal.id} 
name={meal.name} 
description={meal.description} 
price={meal.price} />
</li>)

return(
    <section className={classes.meals}> 
    <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
)
}
export default AvilableMeals;