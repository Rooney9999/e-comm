
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    
      <div className="header">
       { auth ?   
        <ul className="nav-bar">
          <li>
            <Link to="/">products </Link>
          </li>
          <li>
            <Link to="/add">Add products </Link>
          </li>

          <li>
            <Link to="/update">update products </Link>
          </li>

          <li>
            <Link to="/profile">Profile </Link>
          </li>
          <li> <Link onClick={logout} to="/signup" >
                Logout({JSON.parse(auth).name})
              </Link></li>
          
        </ul>:
        <ul className="nav-bar nav-barl" >
          <li>
                  <Link to="/signup">Signup </Link>{" "}
                </li>
                <li>
                  <Link to="/login">Login </Link></li>
        </ul>
        }
      </div>
    
  );
};

export default Navbar;
