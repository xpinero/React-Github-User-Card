import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/xpinero")
      .then((response) => {
        console.log(response);
        this.setState({
          ...this.state,
          user: response.data,
        });
      })
      .catch((err) => console.log("error", err));

    axios
      .get("https://api.github.com/users/xpinero/followers")
      .then((response) => {
        console.log(response);
        this.setState({
          ...this.state,
          followers: response.data,
        });
      })
      .catch((err) => console.log("error", err));
  }

  render() {
    console.log("State:", this.state);
    return (
      <div className="App">
        <div>
          <h1 className="userName">{this.state.user.name}</h1>
        </div>
        <div>
          {this.state.user ? (
            <img src={this.state.user.avatar_url} alt='user pic'/>
          ) : (
            <p>Image Loading...</p>
          )}
        </div>
        <div>
          {this.state.followers.map((followers) => (
            <p className="followers">Loyal followers: {followers.login}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
