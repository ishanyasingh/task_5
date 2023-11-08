import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className='display'>
        <h1>Age Calculator</h1>
        <label>
            Enter your date of birth
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button onClick={calculateAge}>Calculate Age</button>
        {age !== null && <p>You are {age} years old</p>}
    </div>
  );
};

export default AgeCalculator;