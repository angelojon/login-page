'use client'


import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'


export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleButton = async () => {
    try {
      const response = await fetch ('/api', {
        method: 'POST',
        body: JSON.stringify({email, password})
      });
      if (!response.ok) {
        throw new Error ('Error');
      }
      
      const data = await response.json();
      setEmail(data.email);
      console.log(data);

      

    }
    catch (error) {
      console.error('Error fetching data:', error)

      
    }
  };

  


return (
  <main className={styles.main}>
     <h1> Simple Login Page </h1>
  <input type='email' 
  placeholder='E-mail' 
  value={email} 
  onChange={(e) => setEmail(e.target.value)}></input>

  <input type='password' 
  placeholder='Password'
  value={password}
  onChange={(e) => setPassword(e.target.value)}></input>
<button onClick={handleButton}>submit</button>
</main>
)
}
