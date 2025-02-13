import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";
import My_Query from "./My_Query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Bars } from "react-loader-spinner";

const My_Queries = () => {
    const [queriesData, setQueriesData] = useState([])
    const axiosSecure = useAxiosSecure()
    const [dataLoading, setDataLoading] = useState(true)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        document.title = "My Queries | ChoiceChampion"
    }, [])

    const url = `/query/${user?.email}`
    useEffect(() => {
        if (user) {

            axiosSecure.get(url)
                .then(res => {
                    setQueriesData(res.data)
                    setDataLoading(false)
                })
        }

    }, [url, axiosSecure])

    
    if (dataLoading) {
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
    // console.log(queriesData.reverse());
  
    return (
        <div className="p-2">
            <div className="relative z-0 font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://i.ibb.co/QYBbz5H/slider3.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
                <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h1 className="text-4xl font-bold">Explore Queries</h1>
                    <p className="mt-4  text-xl mb-5">Discover alternative products and recommendations from our community.</p>
                </div>
            </div>
            {/* My Queries */}
            <section>
                <h1 className="text-center text-3xl font-bold my-5">My Queries</h1>

                {
                    queriesData.length > 0 ?
                        <>
                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                                {queriesData.map(data => <My_Query key={data._id} queries={data} queriesData={queriesData} setQueriesData={setQueriesData} />)}

                            </div>
                        </>
                        :
                        <div className="text-center flex-col my-10 flex justify-center items-center">
                            <h1 className="text-center">You don't add query</h1>
                            <p>If you add any query please click add query button</p>
                            

                        </div>
                }

            </section>
        </div>
    );
};

export default My_Queries;