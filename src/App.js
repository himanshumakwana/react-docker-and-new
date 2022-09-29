import { ErrorComponent } from "./error-bountry/ErrorCompoent";
import ErroredComp from "./error-bountry/ErroredComp"
import NormalComponent from "./error-bountry/NormalComponent"

function App() {
  return (
    <div className="App">
      
      <ErrorComponent>
        <ErroredComp />
      </ErrorComponent>

      <ErrorComponent>
        <NormalComponent />
      </ErrorComponent>
    </div>
  );
}

export default App;
