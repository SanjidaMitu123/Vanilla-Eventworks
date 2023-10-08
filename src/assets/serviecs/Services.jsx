
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";




// eslint-disable-next-line react/prop-types
const Services = ( {services} ) => {
  
    const service1 = useLoaderData();
    
    
    return (
        <div>
           <h1 className="text-5xl text-center mt-7 text-cyan-500"> OUR SERVICES</h1>
           <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
                {
                     // eslint-disable-next-line react/prop-types
                     services?.map ((service)=> <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
                {
                    // eslint-disable-next-line react/prop-types
                    service1?.map ((service)=> <ServicesCard key={service.id} service={service}></ServicesCard> )
                    
                }
                
            </div>
 
         

        </div>
        
    );   

   
};


export default Services;