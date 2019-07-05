import React from "react";
import "./index.css";

class ButtonSound extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      top: props.top || 50,
      left: props.left || 50
    };
  }

  handleMove = (eje, desplazamiento) => {
    console.log(eje, desplazamiento);
    console.log(this.state);
    let value = this.state[eje] + desplazamiento;
    if (value < 4) {
      value = 4;
    }
    if (value > 96) {
      value = 96;
    }
    this.setState({
      [eje]: value
    });
  };

  handleReset = () => {
    console.log("hola");
    this.setState({
      top: 50,
      left: 50
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleMove("left", -1)}>Izquierda</button>
        <button onClick={() => this.handleMove("top", -1)}>Arriba</button>
        <button onClick={() => this.handleMove("left", 1)}>Derecha</button>
        <button onClick={() => this.handleMove("top", 1)}>Abajo</button>
        <button onClick={() => this.handleReset()}>reset</button>
        <div className="plano">
          <div
            className="bola"
            style={{ top: `${this.state.top}%`, left: `${this.state.left}%` }}
          />
        </div>
      </div>
    );
  }
}

export default ButtonSound;
