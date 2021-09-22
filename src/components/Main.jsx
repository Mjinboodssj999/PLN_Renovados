import React from "react";

import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import 'bootstrap/dist/css/bootstrap.css'
import {Col,Row,Carousel} from 'react-bootstrap'
import Barra from './Barra'

function Main() {

  return (
    <div className="App ">
      <Barra/>
      <div className="IntroduccionP">
      <div className="container pt-4 pb-4">
       <Carousel className="rounded">
            <Carousel.Item>
              <img
                className="d-block h-100 w-100"
              
                src="../congreso2.png"
                alt="First slide"
              />
              <Carousel.Caption>
              <div className="lblcarousel">
                <h3>Second slide label</h3>
                  ddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaa sit amet, consectetur adipiscing elit.
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                
                src="../Fondo1.JPG"
                alt="Second slide"
              />

              <Carousel.Caption>
                
                <div className="lblcarousel">
                <h3>Second slide label</h3>
                  ddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaa sit amet, consectetur adipiscing elit.
                </div>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../congreso1.png"
                alt="Third slide"
              />

              <Carousel.Caption>
              <div className="lblcarousel">
                <h3>Second slide label</h3>
                  ddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaa sit amet, consectetur adipiscing elit.
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> 
       </div>
      </div>
      <div className="footer">
          <Col className="">
            <Row>
                <Col className="col-5"> 
                  <div>
                    <img className="logoIcon d-inline" src="./logoU.png" alt="" />
                    
                    <h6 className="d-inline"> Universidad Nacional de San Antonio Abad del Cusco</h6>
          
                  </div>

                  <div>
                    <img className="logoIcon d-inline" src="./logoInfo.png" alt="" />
                    
                    <h6 className="d-inline"> Ingenieria informatica y de sistemas</h6>
          
                  </div>
                 
                </Col>
                <Col className="col-3">
                  <h6> <IoIcons.IoLocation/>Localizacion</h6>
                  <p>cusco, cusco ,peru</p>
                  
                </Col>
                <Col className="col-4">
                  <p class="mb-0"><AiIcons.AiFillGithub/>{" "}  <a className="links" href="https://github.com/Mjinboodssj999/PLN_Renovados" target="_blank"> nuestro Github</a></p>
                  <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
                </Col>
          
            </Row>
            
          </Col>
      </div>
    </div>
  );
}

export default Main;
