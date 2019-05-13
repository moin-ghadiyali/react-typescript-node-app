import React, { Component } from 'react';

class App extends Component {

state:any = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.message }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/v1/auth');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;