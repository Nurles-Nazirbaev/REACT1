import React from 'react'

const Footer2 = (props) => {
  console.log(props);
  return (
    <div style={{ backgroundColor: props.color, width: "700px", minHeight: "100px", alignItems: 'center', display: 'flex',
     justifyContent: 'space-around', margin: 'auto', marginTop: '10px', border: '1px solid', borderRadius: '10px'}}>
    <h2>{props.phoneName}</h2>
    <span>{props.price}</span>
    <span>{props.color}</span>
  </div>
  ) 
}

export default Footer2
