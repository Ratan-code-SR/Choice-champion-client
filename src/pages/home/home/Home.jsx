import Banner from "../banner/Banner";
import Slider from "../slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider />
            <div className="my-10 rounded-md">
                <Banner />
            </div>
        </div>
    );
};

export default Home;