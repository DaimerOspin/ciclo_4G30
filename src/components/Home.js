import React, { Component } from 'react'
import Products from './Products';
import News from './News';

export default class Home extends Component {
    render() {
        return (
            <div>
                Home page
                
                <Products></Products>
                {/* <News></News> */}

            </div>
        )
    }
}

