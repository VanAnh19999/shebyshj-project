import React, { useEffect, useState } from 'react'
import ShareProduct from './ShareProduct'

const Skirt = () => {
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/product/?type=Skirt')
    .then(res=>res.json())
    .then(json=>setItems(json))
  },[])
  return (
    <div>
    <div>
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
 </div>
 </div>
  )
}

export default Skirt