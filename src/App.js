import { useState } from "react";
import ErrorBountry from "./error-bountry/ErrorBountry";
import LazyImport from "./lazy-suspense/LazyImport";

function App() {
  const [picture, setPicture] = useState()

  const changeFile = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    setPicture(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="App">
      {/* <ErrorBountry /> */}

      <form>
        <img src={`${picture}`} alt="nothing here" />
        <input type="file" name="file" onChange={changeFile} />
      </form>

      <LazyImport />
    </div>
  );
}

export default App;
