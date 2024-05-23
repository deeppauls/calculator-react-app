import "./App.css";
import Display from "./components/display";
import ButtonsContainer from "./components/button-container";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  function onButtonClicked(buttonText) {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal); // eval() evaluates the string present by converting it into mathematical expression
      setCalVal(result);
    } else {
      let newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  }

  return (
    <div className="calculator">
      <Display calVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
