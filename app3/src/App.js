import LocalButton from "./Button";
import React from "react";
import moment from 'moment'
const App = () => (
  <div>
    <h1>This is a App 3 {moment().toString()}</h1>
    <LocalButton />
  </div>
);

export default App;
