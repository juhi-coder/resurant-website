import { Fragment } from "react";
import Header from "./components/Header/Header";
import MealsSummary from './components/Meals/MealsSummary'
function App() {
  return (
    <Fragment>
      <Header>
        <MealsSummary></MealsSummary>
      </Header>
    </Fragment>
  );
}

export default App;
