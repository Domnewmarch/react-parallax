import React, { Component } from 'react';
import background from "../assets/images/hero.jpg";
import Button from './Button1'

export default class Home extends Component {
  render() {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-fixed bg-center bg-cover bg-no-repeat h-screen flex flex-col relative">
          <div className="flex flex-col items-center m-auto"> 
            <div className="flex flex-col items-center m-atuo">
              <h1 className="text-6xl md:text-8xl font-bold uppercase text-center font-Montserrat md:w-2/3 stroke-white">make your event a success</h1>
              <p className="text-white text-center pt-8 w-1/4 font-light ">zicket handles the hassle of selling tickets for every type of event</p>
            </div>
            <Button />
          </div>
         
        </div>
    );
  }
}