import { useEffect } from "react";
import Banner from "../banner/Banner";
import Feature1 from "../feature/Feature1";
import Feature2 from "../feature/Feature2";
import Feature3 from "../feature/Feature3";
import Status from "../feature/Status";
import News_Letter from "../news_letter/News_Letter";
import Recent_Queries from "../recent_queries/Recent_Queries";
import Slider from "../slider/Slider";
import Testimonial from "../testimonial/Testimonial";


const Home = () => {
    useEffect(() => {
        document.title = "Home | ChoiceChampion"
    }, [])

    return (
        <div>
            <Slider />
            <div className="my-10 rounded-md">
                <Banner />
            </div>
            <div>
                <Recent_Queries />
            </div>
            <div>
                <Feature1 />
            </div>
            <hr />
            <div>
                <Status/>
            </div>
            <hr />
            <div>
                <Feature2 />
            </div>
            <div>
                <Feature3/>
            </div>
            <div className="">
                <div className="mb-5 text-center py-2">
                    <h2 className="text-3xl font-extrabold text-emerald-500">What our happy client say</h2>
                </div>
                <Testimonial />
            </div>
            <div className="">
                <News_Letter />
            </div>
        </div>
    );
};

export default Home;