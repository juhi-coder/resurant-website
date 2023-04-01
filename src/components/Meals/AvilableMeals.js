const AvilableMeals=()=>{
const mealsList=DUMMY_MEALS.map(meal=><li>{meal.name}</li>)

return(
    <section>
        <ul>
            {mealsList}
        </ul>
    </section>
)
}
export default AvilableMeals;