import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
        <nav className="lg:flex ml-[240px] text-center items-center relative ">
            <Logo></Logo>
            <ul className=" flex ml-12 text-right gap-6 mr-6 font-extrabold text-2xl text-cyan-500 ">
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
                     to="/donation"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Services
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/statistics"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Works
                   </NavLink>
                </li>
             
                <li>
                   <NavLink
                     to="/statistics"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Blogs
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/statistics"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      Contact
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/statistics"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                      }
                     >
                      My Account
                   </NavLink>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;