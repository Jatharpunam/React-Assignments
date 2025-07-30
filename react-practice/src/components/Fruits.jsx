import React, { useState } from 'react';
import fruitsData from '../../data';

const Fruits = () => {
  const [fruits, setFruits] = useState(['Apple','Kiwi', 'Banana', 'Orange']);

  return (

    <div className="text-center my-3">

     <table>
      <thead>
        <tr>
        <th>Sr. No</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {fruitsData.map((fruit,index)=> (
          <tr keys = {fruit.id}>
          <td>{index+1}</td>
          <td>{fruit.name}</td>
          <td>₹{fruit.price}</td>
          <td>{fruit.quantity > 0 ? (<p>In Stock</p>) : (<p>Out of Stock</p>)}</td>
          <button><img src={fruit.image} alt={fruit.name}/>Buy Now</button>
          </tr>
        ))}
      </tbody>
      
      </table>

      <h4 style={{ color: '#ff9800' }}>{fruits[2]}</h4>
    </div>

    // <div>
    //   <ul>
    //     {fruits.map((elemt, index)=>(
    //       <li keys={index}>{elemt}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Fruits;
