import React from 'react';

// Handles individual field logic, for the inputs of surveyForm.
// input is automatically grabbed from the props object.
export default ({ input }) => {
  return (
    <div>
      // All properties of input will be passed into the input div.
      <input  {...input}/>
    </div>
  );
};
