
import React from 'react'
const Title = () => {
    return (

        <>
        <a href='/'/>
      <img className='logo' src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"/>
   </> )
}
const Header = () => {
  return (
 <div className='header'>
<Title/>
             <div className='nav-items'>
                 <ul>
                     <li>Home</li>
                      <li>Contact</li>
                     <li>About</li>
                      <li>Cart</li>
                 </ul>
             </div>
          </div>
  )
}

export default Header
