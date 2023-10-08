
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Blogs = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
},[])

    return (
        <div>

        <h1 data-aos="fade-up-left" className="text-4xl text-center text-[#ff44b7]  mb-4">Our Stories</h1>
        <div  className="grid lg:grid-cols-4 sm:grid-cols-1 gap-7 mb-7 ml-7 ">
           
        
          <img data-aos="fade-down-right" src="/public/event1.PNG" alt="" />
          <img data-aos="fade-down-left" src="/public/event3.PNG" alt="" />
          <img data-aos="fade-down-right" src="/public/event4.PNG" alt="" />
          <img data-aos="fade-down-left" src="/public/event5.PNG" alt="" />
         

          <img data-aos="fade-down-left" src="/public/eventwork3.PNG" alt="" />
          <img data-aos="fade-down-right" src="/public/eventwork4.PNG" alt="" />
          <img data-aos="fade-down-right" src="/public/event4.PNG" alt="" />
          <img data-aos="fade-down-left" src="/public/event5.PNG" alt="" />



        </div>
       
    </div>
    );
};

export default Blogs;