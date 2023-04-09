import React, { Component } from "react";

export class ProfileClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
      second: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>ProfileClass {this.state.first}</h1>
        <h2>
          Name:{this.props.name} {this.state.second}
        </h2>
        <button
          onClick={() => {
            this.setState({
              first: this.state.first + 1,
              second: this.state.second + 1,
            });
          }}
        >
          Setcount
        </button>
      </div>
    );
  }
}

export default ProfileClass;
