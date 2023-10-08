import { useLoaderData } from "react-router-dom";
import Slider from "../../Slider/Slider";
import BestWorks from "../../best work/BestWorks";
import Aos from "aos";
import 'aos/dist/aos.css';
import Review from "../../reviews/Review";
import Services from "../../serviecs/Services";
import { useEffect } from "react";


const Home = () => {


    const services = useLoaderData();
    useEffect(()=>{
        Aos.init({duration:1000})
},[])

    return (
        <div>
            <h1  data-aos="fade-up" className="text-center mb-7 text-4xl text-[#ff44b7] "> VANILLA <span className="text-4xl text-cyan-500"> EVENT</span> WORKS  </h1>
            <Slider></Slider>
            <Services services={services}></Services>
            <BestWorks></BestWorks>
            <Review></Review>
           
        </div>
    );
};

export default Home;