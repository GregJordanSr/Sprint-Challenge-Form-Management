import React, { useState, useEffect } from 'react';
import axiosWithAuth from './authConfig';

 const FriendList = () => {
     const [data, setData] = useState([]);

     const updateData = res => {
         setData(res)
     }

     useEffect(() => {
      
    axiosWithAuth()
        .get("/restricted/data")
        .then(res => updateData(res.data) )
        .catch(error => console.error(error))
     }, [])

    return (
        <div>
         { data.map((item,key) => (
            <div key={key}>
              
              <p>{item.name} </p>
              <p>{item.course} </p>
              <p>{item.technique}</p>
              <p>{item.ingredients}</p>
              </div>
          ))}
        </div>
    )
}
export default FriendList;