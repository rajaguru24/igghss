import React from 'react'
import  '../App.css'
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';


function Gallery() {
  return (
  <div className='myImage'>
      
      <img src={image1} alt="sample image"  /><br/>
      <img src={image2} alt="sample image"  /><br/>
      <img src={image3} alt="sample image"  /><br/>
      <img src={image4} alt="sample image"  /><br/>
      <img src={image6} alt="sample image"  /><br/>
      <img src={image7} alt="sample image"  /><br/>
      <img src={image8} alt="sample image"  /><br/>
   </div>
    
  )
}

export default Gallery