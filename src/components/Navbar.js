import React, { Component } from 'react';
import "../css/Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="imgre/motos1.jpg" height= "516px" width= "100%" class="d-block w-100" alt="Vue Js" />
                            <div class="carousel-caption d-none d-md-block">
                            <div class="container-socia">
                            <h3 class="row" id="baner_image">
                                <p class="col-7 col-sm-9 site-title"  id="banner_titulo">La Movilidad Del Futuro</p></h3>
            
                                <br/>   
            
                                <ul class="social-iconos">
                                    <li><a href="https://www.facebook.com/Motos-Scooter-108807104589055/" ><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/" ><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a></li>
                                    <li><a href="https://github.com/DaimerOspin/semana1-grupo27-E-5-27" ><i class="fab fa-github"></i></a></li>
                                    <li><a href="#https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            
                        
                        </div>
                        
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                
                <div class="redes1">
                </div>
                <div class="header" id="inicio">
                    <div class="banner">
                        <div class="row" id="baner_image">
                                <p class="col-7 col-sm-9 site-title"  id="banner_titulo">La Movilidad Del Futuro</p>
                                <br/>          
                        </div> 
                    </div> 
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </div>
        )
    }
}
