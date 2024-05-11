import Banner from "../banner/Banner";
import News_Letter from "../news_letter/News_Letter";
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
            <div className="my-10">
                <News_Letter/>
            </div>
        </div>
    );
};

export default Home;