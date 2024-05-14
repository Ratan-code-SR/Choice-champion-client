
import axios from "axios";
import { AuthContext } from "../../components/provider/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Queries = () => {
    const [queriesData, setQueriesData] = useState([])
    const [search, setSearch] = useState('')
    const [itemsPages, setItemsPages] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [count, setCount] = useState(0)
    const { loading } = useContext(AuthContext)

    // console.log(search);

    useEffect(() => {
        const getQueryData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL
                }/all-queries?page=${currentPage}&size=${itemsPages}&search=${search}`
            )
            setQueriesData(data)
        }
        getQueryData()
    }, [currentPage, itemsPages, search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/queryCount`)
            setCount(data.count)
        }
        getCount()
    }, [])
    // console.log(count)
    const numberOfPages = Math.ceil(count / itemsPages)
    const pages = [...Array(numberOfPages).keys()].map(page => page + 1)


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
    const handleSearchByProductName = e => {
        e.preventDefault()
        const form = e.target;
        setSearch(form.search.value)
    }
    const handleValuePerPageNumber = (e) => {
        const value = parseInt(e.target.value)
        setItemsPages(value)
        setCurrentPage(0)

    }
    return (
        <div>
            <div className="bg-[#2e0249] py-16 px-6 font-[sans-serif]">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-extrabold mb-4">Search for your specific product.</h2>
                    <p className="text-base text-gray-400">Utilize the search function to find your specific product.</p>
                    <form onSubmit={handleSearchByProductName} className="mt-10">
                        <input type="text"
                            name='search'
                            placeholder="Search product..."
                            className="w-full sm:w-96 bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none rounded" />
                        <button type="submit" className="max-sm:mt-8 sm:ml-4 bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <div className="my-5">
                <div className="flex flex-col justify-center items-center gap-2 lg:w-2/3 mx-auto mb-2 w-11/12">
                    <h1 className="text-center font-bold text-3xl ">View All Queries</h1>
                    <p className="text-center text-sm font-semibold">All Queries is a section of the website dedicated to displaying user-generated inquiries regarding alternative products. Users can browse through these queries to discover alternative options to mainstream products, fostering a community-driven platform for exploring sustainable and ethical consumption choices.</p>
                </div>
                <hr />
                <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                    {
                        queriesData.map(data =>
                            <>
                                <div className="bg-white grid lg:grid-cols-2 items-center shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-xl rounded-lg font-sans overflow-hidden mx-auto mt-4">
                                    <img src={data.Product_Image} className="w-full lg:h-full h-[250px]" />
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

                                            <h1 className="text-[#10b981] font-bold">Recommended ( <span className="text-black">{data.recommendationCount}</span> )</h1>
                                        </div>
                                        <Link to={`/viewDetails/${data._id}`}>
                                            <button className="btn btn-secondary mt-2 w-full">Add Recommendation</button>
                                        </Link>

                                    </div>
                                </div>
                            </>

                        )
                    }
                </div>
            </div>
            <div className="flex justify-center gap-2 items-center my-5">
                <button
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                        }
                    }}
                    className=" lg:flex items-center btn md:block sm:block hidden"><span><GrLinkPrevious /></span><span>Prev</span></button>
                {
                    pages.map((page) =>
                        <button
                            className={`${currentPage == page ? 'bg-orange-300' : ''} btn`}
                            onClick={() => setCurrentPage(page)}
                            key={page}>
                            {page}
                        </button>)
                }
                <select onChange={handleValuePerPageNumber} className="border-black w-10 h-10" value={itemsPages} name="" id="">

                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <button
                    onClick={() => {
                        if (currentPage < pages.length) {
                            setCurrentPage(currentPage + 1)
                        }
                    }}

                    className=" lg:flex items-center btn md:block sm:block hidden"><span>Next </span><span><GrLinkNext /></span></button>
            </div>
        </div>

    );
};

export default Queries;