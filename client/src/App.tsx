import React, { Component } from 'react';
import Header from './components/Header';
import './styles/App.css';

class App extends Component<any> {

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.message }))
  //     .catch(err => console.log(err));
  // }
  // callBackendAPI = async () => {
  //   const response = await fetch('/v1/auth');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;