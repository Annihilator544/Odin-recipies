import { useState } from "react";
import "./ShoppingItem.css"
import { StarIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

function ShoppingItem( props ){
    let arr=props.arr;
    const itemId = arr.id;
    const itemTitle = arr.title;
    const price = arr.price;
    const description = arr.description;
    const [count,setCount] = useState(0); 
    const [size,setSize] = useState("XS");
    const rate =0;
    const url = arr.image;
    let date = new Date();
    console.log(date);
    return(
        <div className="Item" id={itemId}>
            <div className="Images">
                <img src={url} />
                <img src={url} />
                <img src={url} />
                <img src={url} />
            </div>
            <div className="itemInfo">
                <h1>
                    {itemTitle}
                </h1>
                <h3 className="rating">
                    {rate}
                    <StarIcon color={"green"} height={25}/> | 1.6K Ratings
                </h3>
                <hr />
                <h1>
                ${price}
                </h1>
                <p className="taxes">
                    Inclusive of all taxes
                </p>
                <h4>
                    Select Size
                </h4>
                <div className="size">
                    <button onClick={()=>{setSize("XS")}}>XS</button>
                    <button onClick={()=>{setSize("S")}}>S</button>
                    <button onClick={()=>{setSize("M")}}>M</button>
                    <button onClick={()=>{setSize("L")}}>L</button>
                    <button onClick={()=>{setSize("XL")}}>XL</button>
                </div>
                <div className="AddtoBag">
                    <button onClick={()=>{setCount(count+1)}}>Add To Bag</button>
                </div>
                <hr />
                <p>
                    <b>Extra 10% off</b> with HDFC Bank Cards | Min. cart value $500
                </p>

                <p className="Delivery">
                DELIVERY OPTIONS
                <svg fill="#000000" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.17 7.36 13 4.92a1.25 1.25 0 0 0-.94-.42h-2V2.75A1.25 1.25 0 0 0 8.82 1.5H1.76A1.25 1.25 0 0 0 .51 2.75v8.5a1.25 1.25 0 0 0 1.25 1.25h.33a2.07 2.07 0 0 0 2.13 2 2.08 2.08 0 0 0 2.14-2H10a2.07 2.07 0 0 0 2.13 2 2.08 2.08 0 0 0 2.14-2 1.26 1.26 0 0 0 1.2-1.25V8.19a1.22 1.22 0 0 0-.3-.83zM4.22 13.25a.82.82 0 0 1-.88-.75.82.82 0 0 1 .88-.75.83.83 0 0 1 .89.75.83.83 0 0 1-.89.75zm4.6-7.58v5.58H5.89a2.17 2.17 0 0 0-1.67-.75 2.17 2.17 0 0 0-1.66.75h-.8v-8.5h7.06zm1.25.08h2l1.44 1.63h-3.44zm2.08 7.5a.82.82 0 0 1-.88-.75.82.82 0 0 1 .88-.75.83.83 0 0 1 .89.75.83.83 0 0 1-.89.75zm0-2.75a2.17 2.17 0 0 0-1.66.75h-.42V8.62h4.17v2.63h-.42a2.17 2.17 0 0 0-1.67-.75z"></path></g></svg>
                </p>
                <p> 
                    <Input placeholder="Enter Pincode" type="number" onSubmit={()=>{document.getElementById("text").innerHTML="Get it by"}}/>
                    Check area
                </p>
                <p id="text"></p>
                    Please enter PIN code to check delivery time & Pay on Delivery Availability
                <p>
<ul>
<li>Usually delivered in 7-8 days</li>
<li>Enter pincode for exact delivery dates/charges</li>
<li>Easy 14 days returns and exchanges</li>
<li>Try & Buy might be available</li>
</ul>
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {count} items are left !
                </p>
            </div>
        </div>
    )
}

export default ShoppingItem;