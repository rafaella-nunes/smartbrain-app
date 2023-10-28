import React, { Component } from 'react';
import './App.css';
import Clarifai from "clarifai";
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';

/*const app = new Clarifai.App({
  apiKey: "5be6e6ec2f4a4b57a49a9ca6998da44a"
});*/


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
    /*app.models
    .predict("5be6e6ec2f4a4b57a49a9ca6998da44a",
    "https://samples.clarifai.com/face-det.jpg")
      .then(
      function(response) {
        console.log(response);
      },
      function(err){
        console.log(err)
      }
    );*/
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
