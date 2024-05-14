
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
                `${import.meta.env.VITE_API_LOCAL
                }/all-queries?page=${currentPage}&size=${itemsPages}&search=${search}`
            )
            setQueriesData(data)
        }
        getQueryData()
    }, [currentPage, itemsPages,search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_LOCAL}/queryCount`)
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
            <div className="flex justify-center gap-2 items-center">
                <button
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                        }
                    }}
                    className=" flex items-center btn"><span><GrLinkPrevious /></span><span>Prev</span></button>
                {
                    pages.map((page) =>
                        <button
                            className={`${currentPage === page ? 'bg-orange-300' : ''} btn`}
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

                    className=" flex items-center btn"><span>Next </span><span><GrLinkNext /></span></button>
            </div>
        </div>

    );
};

export default Queries;