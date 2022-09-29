import ErrorBountry from "./error-bountry/ErrorBountry";
import LazyImport from "./lazy-suspense/LazyImport";

function App() {
  return (
    <div className="App">
      {/* <ErrorBountry /> */}
      <LazyImport />
    </div>
  );
}

export default App;
