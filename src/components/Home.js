import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    fetch('http://localhost:3030/login',
    {method:"POST"})
    .then(response => {
      alert('You have logged out')
      navigate('/')
     })
     .catch(error => console.error(error));
  }
  return (
    <div>
      <div>You are successfully logged In</div>
      <button onClick ={handleLogout}>Logout</button>
    </div>
    
  )
}

export default Home