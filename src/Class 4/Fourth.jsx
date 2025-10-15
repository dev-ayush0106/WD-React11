import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Fourth = () => {
    let [products,setProducts]=useState([]);
    // What is API?
    // Application Programming Interface

    // fetch & axios
    
    // Pagination
    let [current,setCurrent]=useState(0);

    let PAGE_SIZE=10
    let start=current*PAGE_SIZE
    let end=PAGE_SIZE+start

    let noOfPages=Math.ceil(194/PAGE_SIZE)

    let url=`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${PAGE_SIZE*current}`

    // useEffect() this is hook which used to manage the side effects of the website

    // Without an dependency : Whenever their is change in a page it re-render itself

    // With Empty array : It will re-render only the first time : data fetching 

    // With an object : It relay on the object , whenever it is change it also re-render

    // Syntax:

    // useEffect(callback,dependency)

    

    // function dataFetch(){
    //     fetch(url) // promise : then & catch
    //     .then((res)=>{
    //         // console.log(res)
    //         return res.json() // promise : then & catch
    //     })
    //     .then((data)=>{
    //         setProducts(data.products)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    async function dataFetch(){
        let all=await axios.get(url)
        let data=all.data.products
        setProducts(data)
        console.log(all.data.total)
    }

    useEffect(()=>{
        dataFetch()
    },[current])

    console.log(products);

    let navigate=useNavigate()

    function toNextPage(id){
        navigate(`/products/${id}`)
    }

  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"}}>
        {
            products.map((el)=>(
                <div onClick={()=>{toNextPage(el.id)}} key={el.id} style={{width:"300px",border:"2px solid black",padding:"30px"}}>
                <h2>{el.title}</h2>
                <img src={el.thumbnail} alt="" />
                <p>{`Rs ${Math.ceil(el.price*83)}`}</p>
                </div>
            ))
        }

    </div>
        {
            [...Array(noOfPages).keys().map((el)=>(
                <button onClick={()=>{setCurrent(el)}} style={{marginTop:"20px"}}>{el+1}</button>
            ))]
        }
        </>
  )
}

export default Fourth
