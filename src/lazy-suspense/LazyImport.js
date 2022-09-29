import React, { Suspense } from "react";
import NormalFile from "./NormalFile";

const LazyFile = React.lazy(() => import("./LazyFile"));

const LazyImport = () => {
  return (
    <>
      <NormalFile />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFile />
      </Suspense>
    </>
  );
};

export default LazyImport;
