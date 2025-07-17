import React from 'react'
import './Items.css'
export default function Items(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                New_Price = ${props.new_price}

            </div>
             <div className="item-price-old">
                Old_Price=${props.old_price}

             </div>
        </div>
    </div>
  )
}
