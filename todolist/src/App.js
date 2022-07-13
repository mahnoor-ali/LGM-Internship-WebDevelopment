import React from 'react';
import './App.css';
import InputItem from './components/InputItem';
import Navbar from './components/Navbar';

function App() {


  // const testing = () => {
  //   let items = JSON.parse( localStorage.getItem("todo"));
  //   console.log(items[1]);
  // };

  return (
    <div className="App">
        <Navbar/>
        <InputItem />
        <button></button>
    </div>
  );
}

export default App;
