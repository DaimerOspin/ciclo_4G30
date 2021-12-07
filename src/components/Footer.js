import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div >
                <footer class="footer-section" >
                    <section class="container-fluid col-12 col-sm-12">
                        <h2  class="titulo-noticias">Footer Seccion</h2>
                        <div class="footer">
                            <div class="secciones_footer">
                                <h3 margin-left=" -120px" >Motivación</h3>
                                <p class="tex" >La siguiente pagina web es desarrollada por el equipo 27, trata de una plantilla de una empresa dedicada ala venta y reparacion de productos amigables con el medio ambiente. La pagina se divide en 5 secciones: La sección superior, la sección de servicios, la sección de noticias, la sección del equipo y la sección footer.</p> 
                                <figure class="redessociales">

                                    <a href="https://www.facebook.com/Motos-Scooter-108807104589055/"><img class="imgy" src="imgre/bxl-facebook-circle.svg" alt="imgy"/></a>
                                    <a href="https://twitter.com/" ><img src="imgre/bxl-instagram.svg" alt="imgu"/></a>
                                    <a href="https://www.whatsapp.com/" > <img src="imgre/bxl-whatsapp (1).svg" alt="imgo"/></a>
                                    <a href="https://github.com/cesardiaz-utp" ><img src="imgre/bxl-twitter.svg" alt="img9"/></a>
                                            
                                    <a href="https://github.com/DaimerOspin/ciclo_4G30.git" ><img src="imgre/bxl-github.svg" alt="img10"/></a>
                                                        
                                </figure>       
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}
