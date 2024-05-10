import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/provider/ContextProvider";
import axios from "axios";

const My_Queries = () => {
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
        <div className="p-2">
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6">Welcome to the Alternative Product Information System</h2>
                    <p className="text-lg text-center text-gray-200">How are you today?</p>
                    <Link to="/add-queries"
                        className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        Add Queries
                    </Link>
                </div>
            </div>
            {/* My Queries */}
            <section>
                <h1 className="text-center text-3xl font-bold my-5">My Queries</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                    {
                        queriesData.map(data =>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={data.User_Image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Date: {data.Current_Time}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </section>
        </div>
    );
};

export default My_Queries;