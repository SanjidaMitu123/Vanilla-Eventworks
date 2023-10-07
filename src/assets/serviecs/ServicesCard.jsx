/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {

    const {id,name,image,price,short_description} = service || {}
    return (
        <div>
            <div   className="relative flex w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
       <Link to={`/donation/${id}`}>
        <div  className="relative  h-36 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
      
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {name}
            </p>
      
          </div>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {short_description}
            </p>
      
          </div>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}
            </p>
      
          </div>
        </div>
        <div className="p-2 pt-2">
          <button
            className="block text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Book Now
          </button>
        </div>
        </Link>
      </div> 
        </div>
    );
};

export default ServicesCard;