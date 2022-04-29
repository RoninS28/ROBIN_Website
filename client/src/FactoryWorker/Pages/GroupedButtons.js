import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class GroupedButtons extends React.Component {
  state = { counter: 1 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayCounter && <Button style={{backgroundColor:'#4caf50'}} onClick={this.handleDecrement}>-</Button>}
        {displayCounter && <Button disabled style={{color:'black'}}>{this.state.counter}</Button>}
        <Button style={{backgroundColor:'#4caf50'}} onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
