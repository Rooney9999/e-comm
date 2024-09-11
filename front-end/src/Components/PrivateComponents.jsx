import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
    const auth = localStorage.getItem('user');  // Adjusted: No need to parse unless storing JSON
    return auth ? <Outlet /> : <Navigate to='/signup' />;  // If no auth, redirect to signup
}

export default PrivateComponent;
