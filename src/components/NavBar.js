import React from 'react';
import Logo from '../assets/icons/logo.svg';

class NavBar extends React.Component {
    render(){
        return (
            <>
                <nav className = "flex flex-wrap items-center justify-between m-auto p-4 absolute z-10 w-full">
                    
                    <img src={Logo} alt="React logo" />

                   <div className = "flex md:hidden">
                        <button className = "hamburger">
                            <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                            width="40" height="40" />
                            <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                            width="40" height="40" />
                        </button>
                    </div>

                    <div className="toggle hidden md:flex w-full m-0 p-0 h-screen md:h-auto md:w-auto text-center text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none bg-blue-400 md:bg-transparent">
                            <a href="#"
                            class="block md:inline-block text-white font-light font-opensans hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">About</a>
                             <a href="#"
                            class="block md:inline-block text-white font-light font-opensans hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Features</a>
                            <a href="#"
                            class="block md:inline-block text-white font-light font-opensans hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Clients</a>
                            <a href="#"
                            class="block md:inline-block text-white font-light font-opensans hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">News</a>
                            <a href="#"
                            class="block md:inline-block text-white font-light font-opensans hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">FAQs</a>
                    </div>
                    <a href="#"className="toggle hidden md:flex w-full md:w-auto px-8 py-4 text-right bg-pink-500 hover:bg-pink-300 text-white md:rounded-3xl text-xs font-opensans ">GET ZICKET</a>
                </nav>
            </>
        )
    }
}

export default NavBar