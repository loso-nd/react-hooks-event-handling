import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  // If we pass in a param to any handler func we must be sure to pass the same param to the handler function w/in the sythetic events call. Invoke lines 11-13 with a param on handleClick(number)
  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;

//can we invoke the handleClick with a number inside the return or inside the function itself?