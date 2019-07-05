import React from "react";
import "./App.css";
import ButtonSound from "./components/buttonSound";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ButtonSound left={50} top={50} />
      </div>
    );
  }
}

export default App;
