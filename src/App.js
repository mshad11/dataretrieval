
import './App.css';
import React, {useState , useEffect} from 'react';
function App() {
const[data,setData] = useState([]);
useEffect(() => {fetch('https://jsonplaceholder.typicode.com/users') // READ =>GET request to retrieve record
.then((response) => response.json())
.then((result) => setData(result))
.catch((err) =>err)
console.log(data)
},[])
  useEffect(() => {
    //POST request by using fetch method
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify ({username: "James" , email: "james@gmail.com", id: "100" })
      
    };
    fetch('https://jsonplaceholder.typicode.com/users',requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data)) 
  } , [])
  + (
     < div className="app">
     
     <h1>API</h1>
     {data.map((item) => (<div className='box'>
       
       <p> name:{item.name}</p>
       <p>username: {item.username}</p> 
       <p>email: {item.email}</p>
       <p>phone: {item.phone}</p>
       </div>))}
     
     
     </div>
  );
}

export default App;
