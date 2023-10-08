
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const BestWorks = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
},[])


    return (
        <div>

            <h1 data-aos="fade-up-left" className="text-4xl text-center text-[#ff44b7]  mb-4">Our Best Works</h1>
            <div  className="lg:flex gap-7 ml-7 ">

         
              <img data-aos="fade-down-left" src="./eventwork3.PNG" alt="" />
              <img data-aos="fade-down-right" src="./eventwork4.PNG" alt="" />



            </div>
           
        </div>
    );
};

export default BestWorks;