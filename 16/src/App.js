import React, { useState, useRef } from "react";
import TodoList from "./Components/todoList";

function App() {
  const [getter, setter] = useState("");
  const [getSubmit, setSubmit] = useState(false);
  const listOne = useRef("");
  const listTwo = useRef("");
  const listThree = useRef("");


  function handleTitle(e) {
    setter(e.target.value);
  }

  function handleSubmit() {
    if(getter !== "") {
    setSubmit(true);
    }
  }

  return <div style={{textAlign:'center'}}>
    <h1>TODO LIST APP</h1>
    <input type="text" value={getter} placeholder="TODO Title" onChange={(e) => handleTitle(e)}/>
    <br/>
    <input type="text" ref={listOne} placeholder="TODO List 1"/>
    <input type="text" ref={listTwo} placeholder="TODO List 2"/>
    <input type="text" ref={listThree} placeholder="TODO List 3"/>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    
    {getSubmit && <TodoList todo={{
      title: getter, 
      list: [
        listOne.current.value, 
        listTwo.current.value,
        listThree.current.value
        ]
        }}/>
    }
  </div>
}

export default App;