import  Axios  from 'axios';
import React,{useEffect, useState} from 'react';
import './App.css'
const baseUrl="https://jsonplaceholder.typicode.com/posts/1";
function App() {
  const [data,setData]= useState([]);
  useEffect(()=>{
      Axios.get(baseUrl).then((response)=>{
           setData(response.data);
      },[])
  });

  return (
<div className='box'>

<h1>{data.id}</h1>
<h2>{data.title}</h2>
<h3>{data.body}</h3>


</div>
    
  )
}

export default App
