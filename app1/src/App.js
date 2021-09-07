import React from "react";
import divSrcSdk from '@divsrc/divsrc-sdk-lite';


function Component(props) {
  if (!props.artifact) {
    return null
  }
  const LazyComponent = React.lazy(() => divSrcSdk.webpackImport(props.artifact, props.module))
  return (
    <React.Suspense fallback="Loading System">
      <LazyComponent />
    </React.Suspense>
  );
}


const App = () => {
  const [system, setSystem] = React.useState({});

  function setApp2() {
    setSystem({
      scope: "app2",
      module: "foo",
    });
  }

  function setApp3() {
    setSystem({
      scope: "app3",
      module: "./SomeApp",
    });
  }


  return (
    <div>
      <h1>Basic Host-Remote [App1]</h1>
      <button onClick={setApp2}>Load App 2 Widget</button>
      <button onClick={setApp3}>Load App 3 Widget</button>
      <p>
        <Component artifact={system.scope} module={system.module} />
      </p>
    </div>
  );
}

export default App;
