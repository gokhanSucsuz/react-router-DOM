/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Product({user}){
 const {productId} = useParams()
 const [product, setProduct] = useState(null)

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(err=> console.error(err))
   }, [productId])
   if(!product) return <></>
    return (
        <>
        <div className="row row-cols-3">
            <div className="col shadow rounded-3 p-2">
          <div className="card h-100">
            
            <img src={product.image} className="w-100 img-thumbnail" alt="..." />
           
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <h6>${product.price}</h6>
               <a href="#" className="btn btn-primary">Fav</a>
            </div></div>
          </div>
        </div>
            
         
        </>
    )
}