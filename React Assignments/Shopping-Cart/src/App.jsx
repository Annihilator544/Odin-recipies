import { useState } from "react";
import ShoppingItem from "./ShoppingItem"

 function App() {
  const [data, setData]= useState("Null");
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
               setData(json);
            })
  return (
    <>
     <ShoppingItem arr={data[0]} />
    </>
  )
}

export default App
