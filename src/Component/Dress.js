import React, { useEffect, useState } from 'react'  
import ShareProduct from './ShareProduct'

const Dress = () => {
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/product/?type=Dress')
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

export default Dress