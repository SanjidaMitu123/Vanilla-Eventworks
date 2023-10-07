/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {

    const {id,name,image,price,short_description} = service || {}
    return (
        <div>
            <div key={id}  className="relative m-11 h-[350px] flex  w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
      
        <div  className="relative mb-5  h-36 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover "
          />
        </div>
      
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-center text-xl font-medium leading-relaxed text-cyan-500 antialiased">
            {name}
            </p>
      
          </div>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {short_description}
            </p>
      
          </div>
        </div>
        <div className="p-2">
          <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
            <p className="block text-xl font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Cost ${price}
            </p>
      
          </div>
        </div>
        <Link to={`/services/${id}`}>
        <div className="p-2 pt-2">
          <button
            className="block text-xl border-solid border-2 border-cyan-500 text-[#ff44b7] w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            See Details
          </button>
        </div>
        </Link>
      </div> 
        </div>
    );
};

export default ServicesCard;