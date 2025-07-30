import React, { useState } from 'react'
import vegiesData from '../../vegiesData'

const Vegetables = () => {
    const [vegies, setVegies] = useState(['Karela', 'Turai', 'Kaddu'])
    console.log(vegiesData)
  return (
    <div>
        <table>
            <thead>
                <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Avilability</th>
                <th>Action</th>
                </tr>
            </thead>
           
            <tbody>
                {vegiesData.map((veg,index)=>(
                    <tr key = {index}>
                        <td>{index+1}</td>
                        <td>{veg.name}</td>
                        <td>₹{veg.price}</td>
                        <td>{veg.quantity > 0 ? 'Available' : 'Out of Stock'}</td>
                        <td>
                            <p><img src = {veg.image} style={{width:'100px', height : '100px'}}></img></p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <ul>
            {vegies.map((veg,index)=>(
                <li>{veg}</li>
            ))}
        </ul>
    </div>
  )
}

export default Vegetables