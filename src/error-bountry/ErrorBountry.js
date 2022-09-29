import { ErrorComponent } from "./ErrorCompoent";
import ErroredComp from "./ErroredComp"
import NormalComponent from "./NormalComponent"


const Main = () => {
  return (
    <>
      <ErrorComponent>
        <ErroredComp />
      </ErrorComponent>

      <ErrorComponent>
        <NormalComponent />
      </ErrorComponent>
    </>
  );
};

export default Main;
