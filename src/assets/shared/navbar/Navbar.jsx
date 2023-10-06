import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
        <nav className="lg:flex justify-between items-center relative ">
            <Logo></Logo>
            <ul className=" flex gap-6 mr-6  ">
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
                     Locations
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
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;