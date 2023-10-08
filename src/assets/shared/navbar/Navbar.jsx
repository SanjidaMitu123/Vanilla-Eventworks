import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";


const Navbar = () => {


   const {user, logout}= useContext(AuthContext);

   const singOUT = () =>{
      logout()
        .then()
        .catch()
   }
    return (
        <div>
        <nav className="lg:flex sm:grid sm:grid-cols-3 lg:ml-[240px] text-center items-center relative ">
            <Logo></Logo>
            <ul className=" lg:flex  sm:grid sm:grid-cols-3 lg:ml-12 text-right sm:gap-2 lg:gap-6 mr-6 lg:font-extrabold sm:font-bold lg:text-2xl text-cyan-500 ">
                <li>
                  
                  

                    <NavLink
                     to="/"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Home
                   </NavLink>
                   </li>
                   <li>
                   <NavLink
                     to="/services"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Services
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/works"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Works
                   </NavLink>
                </li>
             
                <li>
                   <NavLink
                     to="/reviews"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Reviews
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/contacts"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Contact
                   </NavLink>
                </li>

                {
                  user ?  
               
                  <button onClick={singOUT} className="btn">sing out</button>
                  
                  :<li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                     }
                    >
                     My Account
                  </NavLink>
               </li>
                

                }
              
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;