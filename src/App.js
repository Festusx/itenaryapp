import {useState} from 'react';
import './App.css';
import NameInput from './Components/NameInput';



export default function Board() {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <>
    <div className="Container">
    <NameInput onNameChange={handleNameChange} />
    {/* <p>welcome: {name}</p> */}
   </div>
    </>
  );
}
