import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './ShopCategory.css'
import { CartContext } from '../Context/CartContext';

export default function ShopCategory(props, Items) {
  const { addToCart } = useContext(CartContext);

  
  const [data,setData]=useState([])
const getCategoryTitle = () => {
    switch (props.category) {
      case 'mens':
        return "Men's Category";
      case 'womens':
        return "Women's Category";
      case 'jewelery':
        return "Jewelery Category";
      case 'electronics':
        return "Electronics Category";
      default:
        return "All Products";
    }
  };


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        const allData = response.data;
        console.log(response.data)

        // Filter based on category prop
        const filteredData = allData.filter(product => {
  if (props.category === 'mens') {
    return product.category === "men's clothing";
  } else if (props.category === 'womens') {
    return product.category === "women's clothing";
  } else if (props.category === 'jewelery') {
    return product.category === "jewelery";
  } else if(props.category === 'electronics') {
    return product.category === "electronics";
  } else {
    return true; // fallback: show all
  }
});

        setData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [props.category]);


  return (
    <div className="mens-category-list">
     
     {/* <img src={props.banner} alt="" /> */}
      <h2>{getCategoryTitle()} <hr /> </h2>
      <div className="category-grid">
        {data.map((data) => (
          <div key={data.id} className="category-card">
            <img src={data.image} alt={data.title} /> 
            <h3>{data.title}</h3>
            <p>Price:${data.price}
            </p>
             <button onClick={() => addToCart(data)}>Add to Cart</button>
            
          </div>
        ))}
      </div>
    </div>

     
     
  )
}

















// import React, { useContext } from 'react'
// import './ShopCategory.css';
// import {ShopContext} from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Items from '../Components/Items/Items';



// export default function ShopCategory(props) {
//   const {all_product} = useContext(ShopContext)
//   return (
//     <div className='shop-category'>
//           <img src={props.banner} alt="" />
//           <div className="shopcategory-indexshort">
//             <p>
//               <span>showing 1-12</span> out of 36 products
//             </p>
//             <div className="shopcategory-sort">
//               sort by <img src={dropdown_icon} alt="" />
//             </div>
//           </div>
//            <div className="shopcategory-product">
//             {all_product.map((item,i)=>{
//                 return <Items key={i} 
//                 id={item.id}
//                 name={item.name} 
//                 image={item.image}
//                 new_price={item.new_price}
//                 old_price={item.old_price}/>
//             })}
//         </div>

//     </div>
//   )
// }
























































































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ShopCategory.css'; // Corrected path (should start with ./)

// export default function ShopCategory() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get('https://dummyjson.com/products')
//       .then(response => {
//         console.log(response);
//         setCategories(response.data.products); 
//       })
//       .catch(error => {
//         console.error("Error fetching men's categories:", error);
//       });
//   }, []);

//   return (
//     <div className="mens-category-list">
//       <h2>Men's Categories</h2>
//       <div className="category-grid">
//         {categories.map(data => (
//           <div key={data.id} className="category-card">
//             <img src={data.images[0]} alt={data.title} /> 
//             <h3>{data.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }