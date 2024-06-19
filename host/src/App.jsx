import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "remote/Header";
import Counter from "ms2/Counter";
const SuspenseFooter = React.lazy(() => import("remote/Footer"));

const App = () => {
  /// states
  const [showDynamicHeader, setShowDynamicHeader] = useState(false);

  return (
    <div className="container">
      <Header name="Pankaj" />
      <Counter />
      {showDynamicHeader && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <SuspenseFooter>Footer</SuspenseFooter>
        </Suspense>
      )}
      <button onClick={() => setShowDynamicHeader(true)}>
        Show dynamic header
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
