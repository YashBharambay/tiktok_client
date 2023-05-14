import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const handleClick = async(event) => {
      try {
        event.preventDefault();
        if(username === ''){
          throw new Error('Username or Password is empty');
        }
        if(password === ''){
          throw new Error('Username or password is empty');
        }
        fetch('http://localhost:3030/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password:password
          })
        })
        .then(response => {
         navigate('/home')
        })
        .catch(error => console.error(error));
      } catch (error) {
        alert(error)
      }
     
    };


    const handleUsernameChange = (event) => {
      if(event.target.value===''){
        alert('Username or password should not be empty')
      }
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      if(event.target.value===''){
        alert('Username or password should not be empty')
      }
      setPassword(event.target.value);
    };

  return (
    <div className="App">
        <p>Click here to login</p>
        <form onSubmit={handleClick}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
    
  )
} 

export default Login