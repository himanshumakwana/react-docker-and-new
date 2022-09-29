import { ErrorComponent } from "./error-bountry/ErrorCompoent";
import ErroredComp from "./ErroredComp"
import NormalComponent from "./NormalComponent"

function App() {
  return (
    <div className="App">
      
      {/* <ErrorComponent> */}
        <ErroredComp />
      {/* </ErrorComponent> */}

      <ErrorComponent>
        <NormalComponent />
      </ErrorComponent>
    </div>
  );
}

export default App;
