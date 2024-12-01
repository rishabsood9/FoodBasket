import React from "react";
import UserContext from "./UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count < 10 ? this.state.count + 1 : 10,
            });
          }}
        >
          Increase Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count > 0 ? this.state.count - 1 : 0,
            });
          }}
        >
          Decrease Count
        </button>
        <h1>About Me</h1>
        <h2>{name}</h2>
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
