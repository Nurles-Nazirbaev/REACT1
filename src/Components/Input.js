import React, { useState } from 'react'

const Input = () => {

  const data = []
  console.log(data);

  const [text, setText] = useState(data)
  const [textt, setTextt] = useState([])

  const submitHandler = () => {
    setTextt(prev => [...prev, text])
    setText('')
  }


  function clickHandler(){}

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} type="text" />
      <button onClick={submitHandler}>ADD</button>

        {textt.map((textt) =>(
          <h1>{textt}</h1>
        ))}
    </div>
  );
};

export default Input
