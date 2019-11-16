import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from "redux"
import counter from "./reducers/index"



const store = createStore(counter) // added create store from redux

let onDispatch = (arg) => {
  store.dispatch({ type: arg })
}

 const render = () => { 
  ReactDOM.render(
    <App
      onDispatch={onDispatch} 
      value = {store.getState()}
    
    />,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)