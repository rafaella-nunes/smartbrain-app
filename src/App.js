import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';

class App extends Component{
  render(){
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
        {/*<FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;
