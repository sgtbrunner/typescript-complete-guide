import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Increment</button>
        <div>{this.state.counter}</div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
