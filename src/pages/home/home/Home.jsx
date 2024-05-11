import Banner from "../banner/Banner";
import Recent_Queries from "../recent_queries/Recent_Queries";
import Slider from "../slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider />
            <div className="my-10 rounded-md">
                <Banner />
            </div>
            <div>
                <Recent_Queries/>
            </div>
        </div>
    );
};

export default Home;