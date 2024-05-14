import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../components/provider/ContextProvider";
import { Link } from "react-router-dom";


const Recent_Queries = () => {
    const [queriesData, setQueriesData] = useState([])
    const { loading } = useContext(AuthContext)
    const URL = `${import.meta.env.VITE_API_URL}/query`
    // console.log(URL);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/query`)
            .then(res => {
                setQueriesData(res.data)
            })

    }, [URL])

    if (loading) {
        return <div className="w-16 my-20 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    queriesData.sort((a, b) => {
        const dateCompare = new Date(b.Current_Date) - new Date(a.Current_Date)
        if (dateCompare === 0) {
            const [aHours, aMinutes, aSeconds] = a.Current_Time.split(':').map(Number);
            const [bHours, bMinutes, bSeconds] = b.Current_Time.split(':').map(Number);
            if (aHours !== bHours) {
                return bHours - aHours;
            } else if (aMinutes !== bMinutes) {
                return bMinutes - aMinutes;
            } else {
                return bSeconds - aSeconds;
            }
        }
        return dateCompare

    })
    return (
        <div>
         
            <div className="flex flex-col justify-center items-center gap-2 mx-auto">
                <h1 className="text-center lg:text-4xl text-3xl font-semibold text-[#10b981]">Explore recent Queries</h1>
                <p className="lg:w-2/3 w-11/12 text-center text-sm mb-5">Recent Queries presents users with the most recent inquiries, offering insights into trending consumer interests and facilitating exploration of sustainable and ethical product alternatives. This section enables users to stay informed about emerging topics and discover new options aligned with their values.</p>
            </div>
            <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                {
                    queriesData.slice(0, 6).map(data =>
                        <>
                            <div key={data._id} className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-xl rounded-lg font-sans overflow-hidden mx-auto mt-4 border p-2 lg:h-full md:h-full h-full">
                                <img src={data.Product_Image} className="w-full lg:h-[330px] h-[250px]" />
                                <div className="px-4 py-6">
                                    <h3 className="text-md font-semibold text-[#10b981] ">{data.Product_Name}</h3>
                                    <h3 className="text-md  text-[#a91079] ">{data.Brand_Name}</h3>
                                    <h3 className="text-sm">{data.Query_Title}</h3>

                                    <p title={data.Boycotting_Reason} className="mt-2 text-sm text-gray-400">{data.Boycotting_Reason.slice(0, 80)}...</p>

                                    <div className="flex flex-wrap items-center cursor-pointer border rounded-lg w-full px-4 py-2 mt-6">
                                        <img src={data.User_Image} className="w-9 h-9 rounded-full" />
                                        <div className="ml-4 flex-1">
                                            <p className="text-sm text-black font-semibold">{data.User_Name}</p>
                                            <p className="text-[10px] text-gray-400">{data.User_Email}</p>
                                            <p className="text-[10px] text-gray-400">{data.Current_Date}</p>
                                        </div>

                                        <h1 className="text-[#10b981] font-bold">Recommended ( <span className="">{data.recommendationCount}</span> )</h1>
                                    </div>
                                 
                                    <Link to={`/viewDetails/${data._id}`}>
                                        <button className="inline-flex mt-3 items-center justify-center w-full px-4 py-2 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                            View Details
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </>

                    )
                }
            </div>
        </div>
    );
};

export default Recent_Queries;