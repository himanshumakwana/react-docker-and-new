import { useEffect, useState } from "react";
import ErrorBountry from "./error-bountry/ErrorBountry";
import LazyImport from "./lazy-suspense/LazyImport";

function App() {
  const [picture, setPicture] = useState()
  
  var [value, setValue] = useState()
  
  console.log("first")
  console.log("value1")

  useEffect(() => {
    console.log("value1")
  }, [])
  

  const changeFile = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    setPicture(URL.createObjectURL(e.target.files[0]))
  }

  const handleClick = (e) => {
    e.preventDefault()
    value = "value"

    setValue(val => {
      console.log("function value", value)
    })
    console.log("value3")
  }

  return (
    <div className="App">
      {/* <ErrorBountry /> */}

      <form>
        <img src={`${picture}`} alt="nothing here" />
        <input type="file" name="file" onChange={changeFile} />
        <button onClick={handleClick}>Click me</button>
      </form>

      <LazyImport />
    </div>
  );
}

export default App;
