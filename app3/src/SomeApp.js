import React from "react";
import _ from 'lodash'
const t = {
  a: 'b'
}
const SomeApp = () => <button>Some App! {_.get(t, 'a')}</button>;

export default SomeApp;
