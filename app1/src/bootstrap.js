import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import divSrcSdk from '@divsrc/divsrc-sdk-lite';

divSrcSdk.init({
  installationMapUrl: 'http://localhost:3001/map.json',
  emulators: [{
    url: 'http://localhost:3002/emulator.json',
    components: ['app2'],
  }]
}).then(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
})

