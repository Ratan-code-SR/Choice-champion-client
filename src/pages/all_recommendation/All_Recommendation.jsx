import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommend from "./Recommend";
import { Bars } from "react-loader-spinner";

const All_Recommendation = () => {
    const [recommendData, setRecommendData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    // console.log(recommendData);
    useEffect(() => {
        document.title = "Recommended | ChoiceChampion"
    }, [])

    const URL = `${import.meta.env.VITE_API_URL}/recommend/query_id/${id}`
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setRecommendData(res.data)
                setLoading(false)
            })
    }, [URL])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );

    }
    return (
        <div>
            {
                recommendData.length > 0 ?
                    <>
                        <div className="px-4 py-10 font-[sans-serif]">
                            <div className="max-w-7xl max-md:max-w-lg mx-auto">
                                <h2 className="text-3xl text-center font-extrabold">View All Recommend</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                                    {
                                        recommendData.reverse().map(recommend =>
                                            <Recommend key={recommend._id} recommend={recommend} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <p className="text-center my-20">Not Recommended</p>
                    </>
            }

        </div>
    );
};

export default All_Recommendation;