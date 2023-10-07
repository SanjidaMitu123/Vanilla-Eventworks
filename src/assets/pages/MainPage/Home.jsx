import Slider from "../../Slider/Slider";
import BestWorks from "../../best work/BestWorks";
import Footer from "../../footer/Footer";
import Review from "../../reviews/Review";
import Services from "../../serviecs/Services";


const Home = () => {
    return (
        <div>
            <h1 className="text-center mb-7 text-4xl text-[#ff44b7] "> VANILLA <span className="text-4xl text-cyan-500"> EVENT</span> WORKS  </h1>
            <Slider></Slider>
            <Services></Services>
            <BestWorks></BestWorks>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;