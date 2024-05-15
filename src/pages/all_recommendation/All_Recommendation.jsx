import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommend from "./Recommend";

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
        return <div className="w-16 my-20 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

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