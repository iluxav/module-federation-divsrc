import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import divSrcSdk from '@divsrc/divsrc-sdk-lite';
import "antd/dist/antd.css";


(async function () {
  await divSrcSdk.init('http://localhost:3001/map.json')
  divSrcSdk.setArtifact({
    name: 'app2',
    url: "http://localhost:3002/remoteEntry.js"
  })
  divSrcSdk.setArtifact({
    name: 'app3',
    url: "http://localhost:3003/app3-index.js"
  })
  ReactDOM.render(<App />, document.getElementById("root"));
})()


