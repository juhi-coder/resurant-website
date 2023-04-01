import { Fragment } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
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
