import { useEffect, useState } from "react";
import { useLoaderData, useParams  } from "react-router-dom";
import swal from "sweetalert";

const ServicesDtails = () => {


    const [servicedetails,setservicedetails] = useState ({});
    const {id} = useParams();
    
    const service = useLoaderData();
    

   

    useEffect(()=>{
            const finddetails = service?.find((service1)=> service1.id == id)


            setservicedetails(finddetails);


    },[id,service])

    const {name,image,price,short_description} = servicedetails || {}

    const Booking = () =>{

        const serviceslist = [] ;
    
        const servicelist = JSON.parse(localStorage.getItem('list'))
    
        if (!servicelist){
             
            serviceslist.push(servicedetails)
            localStorage.setItem('list',JSON.stringify(serviceslist))
            swal('Thankyou for booking');
            
        }
        else{


            const similer = servicelist.find(servicedetails => servicedetails.id == id )
             if(!similer){

           
            serviceslist.push(...servicelist,servicedetails)
            localStorage.setItem('list',JSON.stringify(serviceslist))
            swal ('Thankyou for Booking');
            }
        else{
            swal ('Sorry,You have booked same service.After completion of this service .you can book again')
            }
        }
    
       }


    return (
        <div>
            <h1 className="text-4xl text-cyan-500 text-center">service details</h1>
            <div  key={id}  className="relative flex w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
    
    <div  className="relative  h-[400px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
      <img
        src={image}
        className="h-full w-full object-cover relative"
      />
    </div>
   
    <div className="p-2 mb-2">
      <div className=" mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block ml-60 mt-2 text-5xl text-black font-sans ml-[-15px] font-medium leading-relaxed text-blue-gray-900 antialiased">
        {name}
        </p>
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {short_description}
        </p>
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        price ${price}
        </p>
  
      </div>
    </div>
    
    <div className="p-2 pt-2  h-14  ">
      <button onClick={Booking}
          className="block absolute ml-60 bg-[#ff44c1] mt-2 mb-2 text-white w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
      Book now 
      </button>
    </div>
  </div>
 
        </div>
    );
};

export default ServicesDtails;