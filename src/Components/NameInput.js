import React, { useState } from 'react';

function NameInput({onNameChange}) {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter Name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleChange}
        placeholder="...."
      />
      <p>Hello {name ? name : ''}.</p>
    </div>
  );
}

export default NameInput;
