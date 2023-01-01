import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const email = useRef("");
  const firstName = useRef("");
  const lastName = useRef("");
  const age = useRef(0);
  const [user, setUser] = useState({});

  // React.js LifeCycle (componentWillMount, componentDidMount)
  useEffect(() => {
    axios.get(`http://localhost:4000?email=vivek@slimcoder.co`)
    .then(function (response) {
      setUser(response.data.user);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  },[])

  function handleSubmit() {
    const user = {
      email: email.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value
    }
    axios.post('http://localhost:4000/', user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <input type="email" ref={email} placeholder="Email"/>
      <input type="text" ref={firstName} placeholder="First Name"/>
      <input type="text" ref={lastName} placeholder="Last Name"/>
      <input type="Number" ref={age} placeholder="Age"/>
      <button onClick={handleSubmit}>Submit</button>

      <h3>USER DETAILS</h3>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default App;
