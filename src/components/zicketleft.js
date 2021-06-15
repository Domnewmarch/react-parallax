import React, { Component } from 'react'


export default class ZicketLeft extends Component{
    render(){
        return(

            <div class="flex justify-center items-center mt-4 w-full mb-10">
                    <div>
                        <img class="w-2/3 ml-2 lg:w-2/3" src={this.props.image} alt="payment" />
                    </div>

                    <div class="md:ml-24 md:w-1/2">åç
                      
                        <span class="text-5xl font-bold font-montserrat overflow-hidden ml-4 text-gray-800 text-opacity-25">{this.props.num}</span>
                    
                        <h2 class="text-3xl mb-5 font-bold font-montserrat -mt-6">{this.props.heading}</h2>
                        <p class="">{this.props.info}</p>

                            
                        <div class="flex pt-4 items-center">
                            <p class="font-opensans uppercase text-blue-300 font-bold">Explore Features</p> 
                            <button class="bg-blue-200 w-10 h-10 rounded-full ml-6 ring-2 ring-transparent"><i class="fas fa-arrow-right"></i> </button>
                        </div>

                    </div>
            </div>
            
        )
    }
}