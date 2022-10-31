import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/index.css";

const ShareProduct = (props) => {
  return(
 
    <div className="collection__fall-img col-sm-6 col-md-3 gx-5">
      <Link to={'/collections/' + `${props.path}`} ><img src={props.img} alt='dress'/></Link>
    <div className='collection__fall-content'> 
      <Link to={'/collections/' + `${props.path}`}><h3>{props.name}</h3></Link>
      <p>{props.price + 'đ'}</p>
    </div>
    </div>

  )
}

export default ShareProduct