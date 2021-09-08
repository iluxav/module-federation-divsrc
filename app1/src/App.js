import React from "react";
import divSrcSdk from '@divsrc/divsrc-sdk-lite';
import {Button} from 'antd'
import _ from 'lodash';

function Component(props) {
  if (!props.artifact) {
    return null
  }
  const LazyComponent = React.lazy(() => divSrcSdk.webpackImport(props.artifact, props.module))
  return (
    <React.Suspense fallback="">
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
      module: "app3",
    });
  }


  return (
    <div>
      <h1>Basic Host-Remote [App1] {_.get({a: 'foo'}, 'a')}</h1>
      <Button onClick={setApp2}>Load App 2 Widget</Button>
      <Button onClick={setApp3}>Load App 3 Widget</Button>
      <p>
        <Component artifact={system.scope} module={system.module} />
      </p>
    </div>
  );
}

export default App;
