import React from "react";

interface CounterState {
  count: number;
}

export class Counter extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
