import React, { Component } from 'react';
import './App.css';




class App extends Component {
 
  render() {

    let {value, disp, onDispatch}  = this.props
    console.log(disp)
    return (
      <div className="App">
        <input value = {value}/>
        <div>
          <button onClick={()=>{onDispatch("9") } } >9</button>
          <button onClick={()=>{onDispatch("8") } } >8</button>
          <button onClick={()=>{onDispatch("7") } } >7</button>
        </div>
        <div>
          <button  onClick={()=>{onDispatch("6") }  } >6</button>
          <button  onClick={()=>{onDispatch("5") }  } >5</button>
          <button  onClick={()=>{onDispatch("4") }  } >4</button>
        </div>
        <div>
          <button onClick={()=>{onDispatch("3") }   } >3</button>
          <button onClick={()=>{onDispatch("2") }   } >2</button>
          <button onClick={()=>{onDispatch("1") }   } >1</button>
        </div>
        <div>
          <button onClick={()=>{onDispatch("+") }   } >+</button>
          <button onClick={()=>{onDispatch("0") }   } >0</button>
          <button onClick={()=>{onDispatch("-") }   } >-</button>
        </div>
        <div>
          <button onClick={()=>{onDispatch(",") }   } >,</button>
          <button onClick={()=>{onDispatch("=") }   } >=</button>
          <button onClick={()=>{onDispatch("c") }   } >c</button>
        </div>




      </div>
    );
  }
}



export default App;
