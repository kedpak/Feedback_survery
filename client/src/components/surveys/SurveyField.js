import React from 'react';

// Handles individual field logic, for the inputs of surveyForm.
// input is automatically grabbed from the props object.
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input  {...input}/>
    </div>
  );
};
