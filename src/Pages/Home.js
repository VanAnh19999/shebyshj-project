import React from 'react'
import { useState, useEffect } from 'react'
import Product from '../Component/Product'
import Slider from '../Component/Slider'
import Catalog from '../Component/Catalog'

const Home = () => {
//http://localhost:3000/product?_start=0&_end=6&type={props.type}
  return (
    <div>
          <Slider/>
          <Catalog/>
    </div>
    
  )
}

export default Home