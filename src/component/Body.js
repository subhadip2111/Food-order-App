
import React from 'react'
import  Restrauntcard  from './Restrauntcard.js'
import { restaurantList } from '../../constants'

  const Body = () => {
    return (
        <div className='restaurant-list'>
            
            {restaurantList.map((restraurant) => {
                return  <Restrauntcard restaurant={...restraurant.data} key={restraurant.data.id}/>
            })}
           
            
         </div>
     )
}
export default Body