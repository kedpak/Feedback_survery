import React from 'react';

// Handles individual field logic, for the inputs of surveyForm.
// input is automatically grabbed from the props object.
export default ({ input, label, meta: {error, touched} }) => {
  return (
    <div>
      <label>{label}</label>
      <input  {...input}/>
      <div style={{'color': 'red', 'marginBottom': '20px'}}>
        {touched && error}
      </div>
    </div>
  );
};
