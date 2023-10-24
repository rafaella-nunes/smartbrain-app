import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        {/*<FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;
