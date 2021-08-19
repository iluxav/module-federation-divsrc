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
      <h1>Basic Host-Remote</h1>
      <button onClick={setApp2}>Load App 2 Widget</button>
      <button onClick={setApp3}>Load App 3 Widget</button>
      <h2>App 1</h2>
      <Component artifact={system.scope} module={system.module} />
    </div>
  );
}

export default App;
