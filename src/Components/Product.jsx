import React from 'react'
import Footer2 from './Footer2'

const Product = () => {   
  const phone =[
    {
      name: 'Iphone XS',
      price: '1200$',
      color: 'gold'
    },
    {
      name: 'Iphone XR',
      price: '1200$',
      color: 'white'
    },
    {
      name: 'Iphone 11',
      price: '1200$',
      color: 'yellow'
    },
    {
      name: 'Iphone 12 pro max',
      price: '1200$',
      color: 'red '
    },
  ] 
      return (
        <div>
          {phone.map((el) =>(
            <Footer2 phoneName={el.name} price={el.price} color={el.color}/>
          ))} 
        </div>
  )
}

export default Product
