import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'

export default function Popular() {
  const isMobile = window.innerWidth <= 600;
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr />
        <div className="popular-items">
            {data_product.map((item,i)=>{
               const slicedName = isMobile ? item.name.slice(0, 15) + '...' : item.name;
                return <Items key={i} 
                id={item.id}  
                name={slicedName} 
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                />
            })}
        </div>

    </div>
  )
}
