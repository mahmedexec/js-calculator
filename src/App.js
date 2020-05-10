import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      output: 0,
      firstNo: "",
      secondNo: "",
      first: true,
    };
  }

  clearHandle = () => {
    this.setState({
      input: "",
      first: true,
    });
  };
  
  handleClick = (event) => {
    if (
      this.state.input.charAt(0) == 0 &&
      this.state.first == false &&
      event.target.innerHTML == "0"
    )
      return;
    if (
      this.state.input.charAt(this.state.input.indexOf(".") >= 0) == "." &&
      this.state.first == false &&
      event.target.innerHTML == "."
    )
      return;
     
        
    else {
      this.setState({
        input: this.state.input.concat(event.target.innerHTML),
        first: false,
      });
    }
  };
  handleOutput = (event) => {
    var numbersArr = this.state.input.match(/\d{1,10}[\.?\d{1,10}]*/g);
    var operationsArr = this.state.input
      .match(/[x+-/]/g)
      .filter((item) => item != ".");

    let total = parseFloat(numbersArr[0]);

    console.log(numbersArr);
    console.log(operationsArr);
    if (numbersArr.length < operationsArr.length) {
      operationsArr.splice(0,operationsArr.length-1);
    }
    for (let i = 1; i < numbersArr.length; i++) {
      switch (operationsArr[i - 1]) {
        case "+":
          console.log("+");
          total += parseFloat(numbersArr[i]);
          break;
        case "-":
          console.log("-");

          total -= parseFloat(numbersArr[i]);
          break;
        case "x":
          console.log("x");

          total *= parseFloat(numbersArr[i]);
          break;
        case "/":
          console.log("/");

          total /= parseFloat(numbersArr[i]);
          break;
      }

      console.log(total + "   turn    " + i);
    }
    if (numbersArr.length == operationsArr.length && operationsArr.indexOf("-")>=0) total = -total;
    this.setState({
      input: total.toString(),
    });
    console.log(total);
  };

  render() {
    return (
      <div className="container-fluid fill-viewport">
        <h1 className="title text text-responsive text-center ">Calculator</h1>
<div className="container bg bg-warning col-lg-6">
        <div className="row ">
          <h1 id="display" className=" p-3 rounded-lg col-9 bg-warning ">
            {this.state.first ? 0 : this.state.input}
          </h1>
          <button
            id="clear"
            onClick={this.clearHandle}
            className="btn btn-dark m-1 col"
          >
            C
          </button>

          <div className="w-100"></div>

          <button
            id="seven"
            onClick={this.handleClick}
            className="btn btn-dark m-1 col"
          >
            7
          </button>
          <button
            id="eight"
            onClick={this.handleClick}
            className="btn btn-dark m-1 col"
          >
            8
          </button>
          <button
            id="nine"
            onClick={this.handleClick}
            className="btn btn-dark col m-1 "
          >
            9
          </button>
          <button
            id="add"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            +
          </button>
          <div className="w-100"></div>

          <button
            id="four"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            4
          </button>
          <button
            id="five"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            5
          </button>
          <button
            id="six"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            6
          </button>
          <button
            id="subtract"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            -
          </button>
          <div className="w-100"></div>

          <button
            id="one"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            1
          </button>
          <button
            id="two"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            2
          </button>
          <button
            id="three"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            3
          </button>
          <button
            id="multiply"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            x
          </button>
          <div className="w-100"></div>

          <button
            id="decimal"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            .
          </button>
          <button
            id="zero"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            0
          </button>
          <button
            id="equals"
            onClick={this.handleOutput}
            className="btn btn-dark col m-1"
          >
            =
          </button>
          <button
            id="divide"
            onClick={this.handleClick}
            className="btn btn-dark col m-1"
          >
            /
          </button>
          <div className="w-100"></div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
