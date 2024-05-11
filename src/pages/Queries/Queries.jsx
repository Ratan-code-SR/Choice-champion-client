
import axios from "axios";
import { AuthContext } from "../../components/provider/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Queries = () => {
    const [queriesData, setQueriesData] = useState([])
    const { loading } = useContext(AuthContext)
    const URL = `${import.meta.env.VITE_API_URL}/query`
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setQueriesData(res.data)
            })
    }, [URL])

    queriesData.sort((a, b) => {
        const [aHours, aMinutes, aSeconds] = a.Current_Time.split(':').map(Number);
        const [bHours, bMinutes, bSeconds] = b.Current_Time.split(':').map(Number);
        if (aHours !== bHours) {
            return bHours - aHours;
        } else if (aMinutes !== bMinutes) {
            return bMinutes - aMinutes;
        } else {
            return bSeconds - aSeconds;
        }
    })

    if (loading) {
        return <div className="w-16 my-20 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (
        <div>
            <div className="bg-[#2e0249] py-16 px-6 font-[sans-serif]">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-extrabold mb-4">Search for your specific product.</h2>
                    <p className="text-base text-gray-400">Utilize the search function to find your specific product.</p>
                    <div className="mt-10">
                        <input type="email" placeholder="Search product..." className="w-full sm:w-96 bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none rounded" />
                        <button className="max-sm:mt-8 sm:ml-4 bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <h1 className="text-center font-bold text-3xl my-5">All Queries</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                    {
                        queriesData.map(data =>
                            <div key={data._id} className="card card-compact w-full bg-base-100 shadow-xl">
                                <figure><img src={data.User_Image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Date: {data.Current_Time}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions ">
                                        <Link to={`/viewDetails/${data._id}`} className="btn btn-primary">Recommend</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="join">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
            </div>
        </div>

    );
};

export default Queries;