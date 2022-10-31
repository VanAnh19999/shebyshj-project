import React, { useEffect, useState } from 'react'
import "../Style/index.css"
import ShareProduct from './ShareProduct'

const Allproduct = () => {
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/product')
    .then(res=>res.json())
    .then(json=>setItems(json))
  },[])
  
  return (
    <div className='collection'>
      <div className='container'>
      <div className='collection__wrap row'>

      {items.map((data)=>{
        return(
          <ShareProduct
          img ={data.img}
          price = {data.price}
          name = {data.name}
          path = {data.path}
          />
          )
        })}
        </div>
        </div>
    </div>
  )
}

export default Allproduct