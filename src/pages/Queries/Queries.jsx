
import axios from "axios";
import { AuthContext } from "../../components/provider/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { RiLayoutGridFill } from "react-icons/ri";


const Queries = () => {
    const [queriesData, setQueriesData] = useState([])
    const [search, setSearch] = useState('')
    const [itemsPages, setItemsPages] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const [count, setCount] = useState(0)
    const [isLayOutChange, setIsLayOutChange] = useState(true)
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        document.title = "Queries | ChoiceChampion"
    }, [])
    // console.log(search);

    useEffect(() => {
        const getQueryData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL
                }/all-queries?page=${currentPage}&size=${itemsPages}&search=${search}`
            )
            setQueriesData(data.reverse())
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

    const numberOfPages = Math.ceil(count / itemsPages)
    const pages = [...Array(numberOfPages).keys()]

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

    const handleGridLayOutChange2 = () => {
        setIsLayOutChange(false)
    }
    const handleGridLayOutChange3 = () => {
        setIsLayOutChange(true)
    }

 

    return (
        <div>
            <div className="bg-[#2e0249] py-16 px-6 font-[sans-serif]">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-extrabold mb-4">Search for your specific product queries.</h2>
                    <p className="text-base text-gray-400">Utilize the search function to find your specific queries.</p>
                    <form onSubmit={handleSearchByProductName} className="mt-10">
                        <input type="text"
                            name='search'
                            placeholder="Search query..."
                            className="w-full sm:w-96 bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none rounded" />
                        <button type="submit" className="max-sm:mt-8 sm:ml-4 bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold py-3.5 px-6 rounded hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <div className="my-5 md:block hidden">
                <div className="flex ml-5 ">
                    <button className={`btn mr-5 ${isLayOutChange === false ? "bg-green-400" : ""}`} onClick={handleGridLayOutChange2}> <RiLayoutGridFill /> </button>
                    <button className={`btn mr-5  ${isLayOutChange === true ? "bg-green-400" : ""} `} onClick={handleGridLayOutChange3}>< TfiLayoutGrid3Alt /></button>
                </div>

                {
                    queriesData.length > 0 ? <>
                        <div className="flex flex-col justify-center items-center gap-2 lg:w-2/3 mx-auto mb-2 w-11/12">
                            <h1 className="text-center font-bold text-3xl ">View All Queries</h1>
                            <p className="text-center text-sm font-semibold">All Queries is a section of the website dedicated to displaying user-generated inquiries regarding alternative products. Users can browse through these queries to discover alternative options to mainstream products, fostering a community-driven platform for exploring sustainable and ethical consumption choices.</p>
                        </div>
                    </> : <></>
                }
                <hr />

                {
                    queriesData.length > 0 ? <>
                        <div className=" font-[sans-serif] my-4 px-2">
                            <div className="max-w-7xl mx-auto">
                                <div  className={`grid ${isLayOutChange ? 'lg:grid-cols-3 md:grid-cols-3' : "lg:grid-cols-2 md:grid-cols-2"} grid-cols-1 items-center justify-center gap-5`}>

                                    {
                                        queriesData.map((data,index) =>
                                            
                                                <div key={index} className=" cursor-pointer overflow-hidden relative top-0 hover:-top-2 transition-all duration-300 p-3 shadow-2xl border rounded-md ">
                                                    <img src={data.Product_Image} alt="Blog Post 1" className="w-full h-60 object-cover" />
                                                    <div className="p-4">
                                                        <div className="text-sm  gap-3 text-gray-400 mb-2 flex items-center">
                                                            <img src={data.User_Image} className="w-9 h-9 rounded-full" />
                                                            <span>{data.User_Name}</span>
                                                            |
                                                            <span>{data.Current_Date}</span>
                                                            
                                                            <span>{data.Current_Time}</span>
                                                        </div>

                                                        <h3 className="text-md font-bold text-[#10b981] ">Product Name: {data.Product_Name}</h3>
                                                        <h3 className="text-md font-bold text-[#a91079]">Brand : {data.Brand_Name}</h3>
                                                        <h3 className="text-md font-semibold text-[#22c55e]">Recommended ( {data.recommendationCount} ) </h3>
                                                        <h3 className="text-sm font-semibold ">{data.Query_Title}</h3>
                                                        <hr className="" />
                                                        <p title={data.Boycotting_Reason} className="text-gray-400 text-sm">
                                                            {
                                                                isLayOutChange === true ? <>
                                                                    {data.Boycotting_Reason.length < 150 ? <>{data.Boycotting_Reason}</> :
                                                                        <>{data.Boycotting_Reason.slice(0, 80)}...</>}
                                                                </> : <>
                                                                    {data.Boycotting_Reason.slice(0, 150)}
                                                                </>
                                                            }


                                                        </p>
                                                    </div>
                                                    <Link to={`/viewDetails/${data._id}`}>
                                                        <button className="inline-flex mt-3 items-center justify-center w-full px-4 py-2 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                                            Recommend Now
                                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                        </button>
                                                    </Link>

                                                </div>
                                        

                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </> :
                        <>
                            <h1 className="text-center font-bold text-3xl my-9">Not found</h1>
                        </>
                }
            </div>

            {/* pagination section */}
            <div className="flex justify-center gap-2 items-center my-5">
                <button
                    onClick={() => {
                        if (currentPage > 0) {
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
                        if (currentPage < pages.length -1 ) {
                            setCurrentPage(currentPage + 1)
                        }
                    }}

                    className=" lg:flex items-center btn md:block sm:block hidden"><span>Next </span><span><GrLinkNext /></span></button>
            </div>
        </div>

    );
};

export default Queries;