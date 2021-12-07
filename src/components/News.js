import React, { Component } from 'react';
import "../css/news.css";


export default class news extends Component {
    render() {
        
        return (
            
            <div class="container-fluid">
                
                <h2 class="titulo-noticias"  >Seccion Noticias</h2>
                    <section id="news" className="news-section">
                        <div class="row row-cols-1 row-cols-md-2 g-4 ">
                            <div  class="col">
                                <div id= "new"    class="card">
                                    <img width="300px" height="200px"  src="https://cr00.epimg.net/radio/imagenes/2020/01/14/bogota/1578998655_860110_1578999267_noticia_normal.jpg" className="card-img-top" alt="..."/>
                                    <div  class="card-body ">
                                        <h5 class="titulo-news"  ><b>Operación en algunas zonas de Bogotá</b></h5>
                                        <p id="parra" class="card-text " >
                                            Este lunes 13 de enero, la app de patinetas eléctricas, Voom, confirmó que la Secretaría Distrital de Movilidad autorizó su operación en algunas zonas de Bogotá, convirtiéndose así en el primer operador de este tipo de transporte en cumplir con los requerimientos establecidos por la administración distrital.
                                            <a href="https://www.semana.com/emprendimiento/articulo/estas-son-las-zonas-en-las-que-pueden-operar-las-patinetas-voom-en-bogota/280744"> <button class="buton">Leer mas...</button> </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div id= "new"  class="card">
                                    <img width="400px" height="200px" src="https://media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-07/RTS2LFZL.jpg?itok=yKoH139Y" class="card-img-top" alt="..."/>
                                    <div  class="card-body ">
                                    <h5 class="titulo-news"><b>Medios de Transporte Comunes en ciudades</b></h5>
                                    <p id="parra" class="card-text "  >
                                        Las patinetas eléctricas, o scooters, se han convertido en medios de transporte comunes en algunas ciudades del país, ya que representan varias ventajas para sus usuarios: son fáciles de alquilar, permiten evitar el tráfico y, al ser eléctricas, son amigables con el medio ambiente.

                                        <a href="https://www.colombia.com/vida-sana/bienestar/patinetas-electricas-un-riesgo-para-la-salud-si-no-se-toman-las-medidas-pertinentes-236958"> <button class="buton">Leer mas...</button> </a>
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div id= "new"   class="card">
                                    <img width="400px" height="200px" src="https://i5.walmartimages.com/asr/885e9716-22de-4106-b08f-6ee221fd9b77.dce08c9f7c46b6af62530512938418a1.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5  class="titulo-news" ><b>Amigables con el Medio Ambiente</b></h5>
                                    <p id="parra" class="card-text">scooters o patinetas eléctricas hoy en día son una de las opciones de movilidad a corta distancia que más se están utilizando en grandes urbes como París, Londres e incluso Bogotá. Si bien su uso se presenta como una manera de no contaminar el medio ambiente, un estudio realizado por los investigadores Joseph Hollingsworth Michael Hellsing.
                                        <a href="https://www.eltiempo.com/vida/medio-ambiente/cual-es-el-el-impacto-ambiental-que-generan-las-patinetas-electricas-407850"> <button class="buton">Leer mas...</button> </a>
                                    </p>
                                    </div>
                                </div>
                            </div>
                                <div class="col">
                                <div id= "new"  class="card">
                                    <img width="400px" height="200px"  src="https://static1.ideal.es/www/multimedia/202007/10/media/granada/patinete/a076e6d7-f302-4082-9661-7d1ed0b00864.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="titulo-news"><b> Regulacion a Patinetas Electricas</b></h5>
                                    <p id="parra" class="card-text ">Los patinetes eléctricos son una moda emergente y novedosa, al tratarse de vehículos a motor que pueden llegar a alcanzar altas velocidades ya se han dado casos de accidentes con peatones, vehículos, etc. Por ello la dirección general de tráfico junto al gobierno han elaborado una nueva normativa para regular los patinetes eléctricos.
                                        <a href="https://www.eltiempo.com/vida/medio-ambiente/cual-es-el-el-impacto-ambiental-que-generan-las-patinetas-electricas-407850"> <button class="buton">Leer mas...</button> </a>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </section>
               
                    
            </div>
        )
    }
}
