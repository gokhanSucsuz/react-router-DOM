/* eslint-disable react/prop-types */
export default function Login({handleLogin}){

    return (
        <>
            <h1>Login</h1>
            <button 
            className="btn btn-outline-warning" 
            onClick={handleLogin}
            >Login
            </button>
        </>
    )
}