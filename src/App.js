// import {useState} from 'react';
import './App.css';
import LandingComponent from './Components/Landing';
import Button from './Components/NewButton';


export default function Board() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
    <div className="Container">
      <LandingComponent />

      <h1>EnterName<input type='text' className='my-input' placeholder=''></input></h1>
      <Button onClick={handleClick} variant="secondary" size="medium">SUBMIT
      </Button>
      
   </div>
    </>
  );
}
