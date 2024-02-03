/* eslint-disable react/prop-types */
import { Products } from "../products";


export default function Home({user}){
    return (
        <>
        <div className="container my-5 shadow p-5 rounded-3">
            <h1>Home Page</h1>
            <Products  user={user}/>
        </div>
            
        </>
    )
}