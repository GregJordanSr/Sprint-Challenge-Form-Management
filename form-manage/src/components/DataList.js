import React, { useState, useEffect } from 'react';
import axiosWithAuth from './authConfig';

 const DataList = () => {
     const [newData, setNewData] = useState([]);

     const updateData = res => {
         setNewData(res)
     }

     useEffect(() => {
      
    axiosWithAuth()
        .get("/restricted/data")
        .then(res => {updateData(res.data); console.log(res.data)} )
        .catch(error => console.error(error))
     }, [])
    console.log(updateData)
    return (
        <div >
         { newData.map((item,key) => (
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
export default DataList;