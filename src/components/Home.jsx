import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { productsUrl } from '../Url';
import { Container } from 'react-bootstrap';

function Home() {
  console.log(productsUrl)
  
  const [product, setProduct] = useState([])
  useEffect(() => {
   
    axios.get(productsUrl).then((item)=>setProduct(item.data.products))
  
  }, [])
  
 
  
  return (
    <Container>
  
     
      <Carousel >
        {product.slice(1,5).map((data,index)=>{
console.log(data)
          return(

           

            <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src={data.thumbnail}
            alt={index} style={{height:"400px"}}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>


          )
        })}
        
      
      </Carousel>
      </Container>
  )
}

export default Home