import React, { Component } from 'react'

export default class ZicketRight extends Component{
    render(){
        return(
            <div className="flex justify-center items-center mt-4 w-full mb-10">
                   
                    <div className="md:ml-24 md:w-2/3 ml-8 items-center">
                        <span className="text-5xl font-bold font-montserrat font-bold overflow-hidden ml-4 text-gray-800 text-opacity-25">{this.props.num}</span>

                        <h2 className="text-3xl mb-5 font-montserrat -mt-6">{this.props.heading}</h2>
                        <p className="">{this.props.info}</p>
                            
                        <div className="flex pt-4 items-center">
                            <p className="font-opensans uppercase text-blue-300 font-bold">Explore Features</p>
                            <button className="bg-blue-200 w-10 h-10 rounded-full ml-6 ring-2 ring-transparent"><i className="fas fa-arrow-right"></i> </button>
                        </div>

                    </div>
                    <div>
                        
                        <img className="md:ml-20 lg:w-3/4 overflow-visible" src={this.props.image} alt="payment" />
                    </div>  
            </div>
        )
    }
}