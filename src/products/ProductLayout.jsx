import { useEffect, useState } from "react"
import {ProductCard, Category} from "../products"
export default function ProductLayout(){
   const [last10Products, setLast10Products] = useState([])
useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setLast10Products(json))
}, [])
    return (
        <>
            <div className="row my-5 shadow p-5 rounded-3">
                <div className="col-sm-10">
                    <ul className="list-group">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                    {last10Products.map(item =>                           <ProductCard key={item.id} item={item} />
                    )}
                    </div>
                </ul>
                </div>
                <div className="col-sm-2">
                    <Category />
                </div>
            </div>
        </>
    )
}