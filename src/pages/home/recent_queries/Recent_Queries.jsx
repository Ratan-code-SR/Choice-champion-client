import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../components/provider/ContextProvider";


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
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                {queriesData.slice(0,6).map(data => 
                <div key={data._id} className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src={data.User_Image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Date: {data.Current_Time}</h2>
                        <h2 className="card-title">Date: {data.Current_Date}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
    );
};

export default Recent_Queries;