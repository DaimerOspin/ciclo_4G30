import React, { Component } from 'react';
import "../css/Products.css";


export default class Products extends Component {
    render() {
        return (
            <div className="container-fluid">
                <section id="services" class="services-section" >
                    <div class="services-info">
                        <div class="row title-container">
                            <h2 class="titu-services">SECCION SERVICIOS</h2>
                        </div>
                         <div id="envoltorioServicios" className="wrapper">
                            <article  class="col-12 col-md-6 col-lg-4 servicio 1" id="servicio1">
                                <img  class="img-servicios"src="../imgre/productos 2.jpg"  alt="Imagen servicio 1"></img>
                                <h3 class="titulo-servicios">PRODUCTOS</h3>
                                <p> "TRANSELECTRIC S.A.S cuenta con servicio tecnico para toda su clientela ademas de la veta de accesorios para proveer de la mejor experiencia y seguridad a nuestros clientes.</p>
                                
                                <hr></hr>
                            </article>
                            <article  id="servicio2">
                                <img  class="img-servicios" src="../imgre/asesoria2.jpg" alt="Imagen servicio 2"/>
                            
                                <h3 class="titulo-servicios" >ASESORIA</h3>
                                <p>Para TRANSELECTRIC S.A.S es muy importante poder ofrecerle a sus clientes un producto de calidad que cumpla con sus exigencias, por ello contamos con un servicio de asesoria para poder ayudar al cliente a elegir su mejor opcion que se acomode a sus necesidades, presupuesto y gusto.</p>
                                
                                <hr/>
                            </article>
                            <article  class="col-12 col-md-6 col-lg-4 servicio 3" id="servicio3">
                                <img class="img-servicios" src="../imgre/servicio tecnico.jpg"  alt="Imagen servicio 3"/>
                                    
                                <h3 class="titulo-servicios" >SEVICIO TECNICO</h3>
                                <p >TRANSELECTRIC S.A.S cuenta con servicio tecnico para toda su clientela ademas de la veta de accesorios para proveer de la mejor experiencia y seguridad a nuestros clientes.</p>
                                    
                                <hr></hr>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
      
                
        )
    }
}


