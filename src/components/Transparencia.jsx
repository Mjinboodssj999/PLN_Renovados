import React,{useState} from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { Nav, Navbar} from 'react-bootstrap'
import Barra from '../components/Barra'
import {Col,Row} from 'react-bootstrap'
import * as ImIcons from "react-icons/im"
import * as FcIcons from "react-icons/fc"
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'

import anio2016 from '../anio2016.json'
import anio2017 from '../2017.json'
import anio2018 from '../2018.json'
import anio2019 from '../2019.json'
import anio2020 from '../2020.json'
import anio2021 from '../2021.json'
const Transparencia = (props) => {
    const [verCongresista,setVerCongresista]=useState(false);

    const [images,setImages]=useState([])
    
    const [ley,setLey]=useState("")
    const abrirCerrarModalverCongresista=()=>{
        setVerCongresista(!verCongresista);
      }
      
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };  
  const congresista=(ley,datos)=>{

    setImages(datos)
    setLey(ley)
    console.log(datos)
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  var settings = {
    infinite: true,
   
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
    return (
        
        <div >
            <Barra></Barra>
            <Navbar  
                sticky="top" className=" colorT " collapseOnSelect>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#grafica" className="text-white side">  Nube</Nav.Link>
                    <Nav.Link href="#gif" className="text-white side"> no se </Nav.Link>
                    <Nav.Link href="#slider1" className="text-white side">  año 2016 </Nav.Link>
                    <Nav.Link href="#slider2" className="text-white side">  año 2017 </Nav.Link>
                    <Nav.Link href="#slider3" className="text-white side">  año 2018 </Nav.Link>
                    <Nav.Link href="#slider4" className="text-white side">  año 2019</Nav.Link>
                    <Nav.Link href="#slider5" className="text-white side">  año 2020 </Nav.Link>
                    <Nav.Link href="#slider6" className="text-white side">  año 2021   </Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
            
            <div id="grafica"className="container-fluid bg-secondary p-4 mt-2">
                <div className="cardNube mx-auto">
                    <Row>
                        <Col className="col-5 ml-5">
                            <Row >
                                <h3 className="text-secondary"> Nube de palabras</h3>
                            </Row>
                            <Row>
                                <div className="bg-light p-5 contText rounded">
                                <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
                                distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
                                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam 
                                </p>
                                <hr />
                                <b className="small text-primary">nube de palabras</b>
                                </div>
                            </Row>
                        </Col>
                        <Col  className="col-6">
                        <div className="contNube h-100">
                            <img className="nube"src="./nube.png" alt="" />
                        </div>
                        </Col>
                      
                    </Row>
                    
                    
                </div>
            </div>
            
            <div id="gif"className="container-fluid  p-4 colorG">
                <div className="cardNube mx-auto">
                    <Row>
                    <Col  className="col-6">
                        <div className="contNube h-100">
                            <img className="nube"src="./gif.gif" alt="" />
                        </div>
                        </Col>
                        <Col className="col-5 ml-5">
                            <Row >
                                <h3 className="text-secondary"> gif</h3>
                            </Row>
                            <Row>
                                <div className="bg-light p-5 contText rounded">
                                <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
                                distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
                                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam 
                                </p>
                                <hr />
                                <b className="small text-primary">nube de palabras</b>
                                </div>
                            </Row>
                        </Col>
                        
                      
                    </Row>
                    
                    
                </div>
            </div>
            <div className="Fotos container-fluid">
                <hr id="slider1"/>
                <div className="container">
                    <Row>
                        <Col className="col-3 cabe">
                            <h4><b>Año {"->"} 2016</b></h4></Col>
                    </Row>
                </div>
                <Slider {...settings} >
                    {
                        anio2016.map((dato)=>(
                            <div className="altura ">
                            
                                <div className="card h-100">
                                <div className="col tableScroll scroll"> 
                                    <div class="card-body">
                                    <h6 class="card-title"><b className="back">Fecha de presentacion :</b>{dato.fecha_presentacion}</h6>
                                    <p><b className="back">Numero de ley :</b> {dato.numero_ley}</p>
                                    <p class="card-text"><b className="back">Proponente :</b> {dato.proponente}</p>
                                    <p class="card-text "><b className="back">Titulo : </b>{dato.titulo}</p>
                                    <p class="card-text "><b className="back">Objeto del proyecto :</b> {dato.objeto_del_proyecto}</p>                                    
                                    <p class="card-text "><b className="back">Partido(s):</b></p>
                                    {
                                        dato.grupo_parlamentario_PartidoPolitico.map((partido)=>(
                                            <p>{partido===""?"-----":partido}</p>
                                        ))
                                    }
                                    <button type="button" className="btn btn-info" onClick={()=>{ congresista(dato.numero_ley,dato.grupo_parlamentario_Congresistas);abrirCerrarModalverCongresista()}}> ver los congresistas</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <hr id="slider2"/>
                <div className="container">
                    <Row>
                        <Col className="col-3 cabe">
                            <h4><b>Año {"->"} 2017</b></h4></Col>
                        
                   
                    </Row>
                </div>
                <Slider {...settings}>
                    {
                        anio2017.map((dato)=>(
                            <div className="altura">
                            
                                <div className="card h-100">
                                <div className="col tableScroll scroll"> 
                                    <div class="card-body">
                                    <h6 class="card-title"><b className="back">Fecha de presentacion :</b>{dato.fecha_presentacion}</h6>
                                    <p><b className="back">Numero de ley :</b> {dato.numero_ley}</p>
                                    <p class="card-text"><b className="back">Proponente :</b> {dato.proponente}</p>
                                    <p class="card-text "><b className="back">Titulo : </b>{dato.titulo}</p>
                                    <p class="card-text "><b className="back">Objeto del proyecto :</b> {dato.objeto_del_proyecto}</p>                                    
                                    <p class="card-text "><b className="back">Partido(s):</b></p>
                                    {
                                        dato.grupo_parlamentario_PartidoPolitico.map((partido)=>(
                                            <p>{partido===""?"-----":partido}</p>
                                        ))
                                    }
                                    <button type="button" className="btn btn-info" onClick={()=>{congresista(dato.numero_ley,dato.grupo_parlamentario_Congresistas);abrirCerrarModalverCongresista()}}> ver los congresistas</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <hr id="slider3"/>
                <div className="container">
                    <Row>
                        <Col className="col-3 cabe">
                            <h4><b>Año {"->"} 2018</b></h4></Col>
                        
                   
                    </Row>
                </div>
                <Slider {...settings}>
                    {
                        anio2018.map((dato)=>(
                            <div className="altura">
                            
                                <div className="card h-100">
                                <div className="col tableScroll scroll"> 
                                    <div class="card-body">
                                    <h6 class="card-title"><b className="back">Fecha de presentacion :</b>{dato.fecha_presentacion}</h6>
                                    <p><b className="back">Numero de ley :</b> {dato.numero_ley}</p>
                                    <p class="card-text"><b className="back">Proponente :</b> {dato.proponente}</p>
                                    <p class="card-text "><b className="back">Titulo : </b>{dato.titulo}</p>
                                    <p class="card-text "><b className="back">Objeto del proyecto :</b> {dato.objeto_del_proyecto}</p>                                    
                                    <p class="card-text "><b className="back">Partido(s):</b></p>
                                    {
                                        dato.grupo_parlamentario_PartidoPolitico.map((partido)=>(
                                            <p>{partido===""?"-----":partido}</p>
                                        ))
                                    }
                                    <button type="button" className="btn btn-info" onClick={()=>{congresista(dato.numero_ley,dato.grupo_parlamentario_Congresistas);abrirCerrarModalverCongresista()}}> ver los congresistas</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <hr id="slider4"/>
                <div className="container">
                    <Row>
                        <Col className="col-3 cabe">
                            <h4><b>Año {"->"} 2019</b></h4></Col>
                        
                   
                    </Row>
                </div>
                <Slider {...settings}>
                    {
                        anio2019.map((dato)=>(
                            <div className="altura">
                            
                                <div className="card h-100">
                                <div className="col tableScroll scroll"> 
                                    <div class="card-body">
                                    <h6 class="card-title"><b className="back">Fecha de presentacion :</b>{dato.fecha_presentacion}</h6>
                                    <p><b className="back">Numero de ley :</b> {dato.numero_ley}</p>
                                    <p class="card-text"><b className="back">Proponente :</b> {dato.proponente}</p>
                                    <p class="card-text "><b className="back">Titulo : </b>{dato.titulo}</p>
                                    <p class="card-text "><b className="back">Objeto del proyecto :</b> {dato.objeto_del_proyecto}</p>                                    
                                    <p class="card-text "><b className="back">Partido(s):</b></p>
                                    {
                                        dato.grupo_parlamentario_PartidoPolitico.map((partido)=>(
                                            <p>{partido===""?"-----":partido}</p>
                                        ))
                                    }
                                    <button type="button" className="btn btn-info" onClick={()=>{congresista(dato.numero_ley,dato.grupo_parlamentario_Congresistas);abrirCerrarModalverCongresista()}}> ver los congresistas</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <hr id="slider5"/>
                <div className="container">
                    <Row>
                        <Col className="col-3 cabe">
                            <h4><b>Año {"->"} 2020</b></h4></Col>
                        
                   
                    </Row>
                </div>
                <Slider {...settings}>
                    {
                        anio2020.map((dato)=>(
                            <div className="altura">
                            
                                <div className="card h-100">
                                <div className="col tableScroll scroll"> 
                                    <div class="card-body">
                                    <h6 class="card-title"><b className="back">Fecha de presentacion :</b>{dato.fecha_presentacion}</h6>
                                    <p><b className="back">Numero de ley :</b> {dato.numero_ley}</p>
                                    <p class="card-text"><b className="back">Proponente :</b> {dato.proponente}</p>
                                    <p class="card-text "><b className="back">Titulo : </b>{dato.titulo}</p>
                                    <p class="card-text "><b className="back">Objeto del proyecto :</b> {dato.objeto_del_proyecto}</p>                                    
                                    <p class="card-text "><b className="back">Partido(s):</b></p>
                                    {
                                        dato.grupo_parlamentario_PartidoPolitico.map((partido)=>(
                                            <p>{partido===""?"-----":partido}</p>
                                        ))
                                    }
                                    <button type="button" className="btn btn-info" onClick={()=>{congresista(dato.numero_ley,dato.grupo_parlamentario_Congresistas);abrirCerrarModalverCongresista()}}> ver los congresistas</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <hr id="slider6"/>
                <div className="container">
                    <Row>
                        <Col className="col-3 cabe">
                            <h4><b>Año {"->"} 2021</b></h4></Col>
                        
                   
                    </Row>
                </div>
                <Slider {...settings}>
                    {
                        anio2021.map((dato)=>(
                            <div className="altura">
                            
                                <div className="card h-100">
                                <div className="col tableScroll scroll"> 
                                    <div class="card-body">
                                    <h6 class="card-title"><b className="back">Fecha de presentacion :</b>{dato.fecha_presentacion}</h6>
                                    <p><b className="back">Numero de ley :</b> {dato.numero_ley}</p>
                                    <p class="card-text"><b className="back">Proponente :</b> {dato.proponente}</p>
                                    <p class="card-text "><b className="back">Titulo : </b>{dato.titulo}</p>
                                    <p class="card-text "><b className="back">Objeto del proyecto :</b> {dato.objeto_del_proyecto}</p>                                    
                                    <p class="card-text "><b className="back">Partido(s):</b></p>
                                    {
                                        dato.grupo_parlamentario_PartidoPolitico.map((partido)=>(
                                            <p>{partido===""?"-----":partido}</p>
                                        ))
                                    }
                                    <button type="button" className="btn btn-info" onClick={()=>{congresista(dato.numero_ley,dato.grupo_parlamentario_Congresistas);abrirCerrarModalverCongresista()}}> ver los congresistas</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <Modal isOpen={verCongresista} centered>
                    <ModalHeader> Los Congresistas que participaron son :</ModalHeader>
                    <ModalBody>
                        <table>
                            <thead>
                                <th> Ley : </th>
                                <th> {ley}</th>
                            </thead>
                            <tbody>
                            {
                                   images.map((item)=>(
                                        <tr>
                                            <td>{item[0]}</td>
                                            <td><img src={item[1]} alt="al" /></td>
                                        </tr>
                                        
                                    ))
                                }
                            </tbody>
                        </table>
                    </ModalBody>
                    <ModalFooter>
                    <ImIcons.ImCross onClick={()=>abrirCerrarModalverCongresista()}/>
                    </ModalFooter>
                </Modal>
                
            </div>
            
        </div>
    )
}

export default Transparencia
