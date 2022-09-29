import React from "react";

const ErroredComp = () => {
  return (
    <>
    {new Error("ewe")}
      <div>ErroredComp</div>
    </>
  );
};

export default ErroredComp;
