import { Fragment } from "react";
import Header from "./components/Header/Header";
import MealsSummary from './components/Meals/MealsSummary'
import Meals from "./components/Meals/Meals";
import MealItem from "./components/Meals/MealItem";
function App() {
  return (
    <Fragment>
      <Header>
        <main>
          <Meals></Meals>
        </main>
        
      </Header>
    </Fragment>
  );
}

export default App;
