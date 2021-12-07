import React, { Component } from 'react'
import Products from './Products';
import News from './News';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                <Products></Products>
                <News></News>
                <Footer></Footer>
            </div>
        )
    }
}

