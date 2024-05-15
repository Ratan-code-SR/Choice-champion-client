import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../components/provider/ContextProvider";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FaLongArrowAltRight } from "react-icons/fa";

const View_Details = () => {
    const queries = useLoaderData()
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const query = queries.find(data => data._id === id)
    // console.log(query);
    const date = new Date()
    const year = date.getFullYear()
    const monthName = date.toLocaleString("default", { month: 'long' })
    const day = date.getDate()
    const currentDate = `${monthName}-${day}-${year}`
    // console.log(currentDate);
    useEffect(() => {
        document.title = "View Details | ChoiceChampion"
    }, [])

    const {
        Product_Image,
        Brand_Name,
        Product_Name,
        Query_Title,
        Boycotting_Reason,
        Current_Time,
        Current_Date,
        User_Image,
        User_Name,
        _id,
        User_Email,
        recommendationCount
    } = query;

    const handleRecommend = (e) => {
        e.preventDefault()
        const form = e.target;
        const recommend_title = form.recommend_title.value;
        const recommend_product = form.recommend_product.value;
        const recommend_image = form.recommend_image.value;
        const recommend_reason = form.recommend_reason.value;
        const recommend_userName = user?.displayName;
        const recommend_userEmail = user?.email;
        const query_id = _id;
        const query_title = Query_Title;
        const product_name = Product_Name;
        const query_userName = User_Name;
        const query_userEmail = User_Email;
        const current_date = currentDate;
        const recommendInfo = { recommend_image, recommend_product, recommend_reason, recommend_title, recommend_userEmail, recommend_userName, query_id, query_title, product_name, query_userName, query_userEmail, current_date }

        axios.post(`${import.meta.env.VITE_API_URL}/recommend`, recommendInfo,{withCredentials:true})
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Added!",
                        text: "Your data has been added successful.",
                        icon: "success"
                    });
                    //   console.log(data.data);
                }
            })

        // console.log(recommendInfo);
        form.reset()
    }

    return (
        <div className="font-sans ">
            <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className=" px-4 py-10 rounded-xl">
                            <img src={Product_Image} alt="Product" className="w-4/5 rounded object-cover mx-auto" />
                        </div>

                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-semibold ">{Product_Name} | {Brand_Name}</h2>

                        <div className="flex space-x-2 mt-4">

                            <h4 className=" text-base">Date:- {Current_Date} </h4>
                            <h4 className=" text-base">Time:- {Current_Time} </h4>
                        </div>
                        {/* About the coffee */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold ">{Query_Title} </h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm ">
                                <li>{Boycotting_Reason}</li>
                                {/* Add more list items */}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <div className="my-8 flex items-center gap-5">
                                <Link to={`/allRecommend/${_id}`} className="text-sm p-1 flex text-black items-center bg-yellow-300">
                                    <span>Show all recommend</span> <span><FaLongArrowAltRight /></span>
                                </Link>
                            </div>
                            <div>
                                <div className="flex  gap-2 items-center">
                                    <img className="w-10 h-10 rounded-full" src={User_Image} alt="" />
                                    <p>{User_Name}</p>
                                </div>
                            </div>
                            {/* add recommendation in this  input */}
                            <form onSubmit={handleRecommend} className="max-w-4xl mt-8 mx-auto  shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
                                <div
                                    className="my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 text-center">
                                        Add Your Recommendation
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-1 gap-y-7 gap-x-12">
                                    <div>
                                        <div>
                                            <label className="text-sm mb-2 block">Recommendation Title</label>
                                            <input
                                                required
                                                name="recommend_title"
                                                type="text"
                                                placeholder="Recommendation Title"
                                                className=" w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                                        </div>
                                        <div>
                                            <label className="text-sm mb-2 block">Recommended product Name</label>
                                            <input
                                                required
                                                name="recommend_product"
                                                type="text"
                                                placeholder="Recommended product Name"
                                                className=" w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                                        </div>
                                        <div>
                                            <label className="text-sm mb-2 block">Recommended Product Image</label>
                                            <input
                                                required
                                                name="recommend_image"
                                                type="text"
                                                placeholder="Recommended Product Image"
                                                className=" w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                                        </div>
                                        <div>
                                            <label className="text-sm mb-2 block">Recommendation reason</label>
                                            <textarea
                                                required
                                                name="recommend_reason"
                                                type="text"
                                                placeholder="Recommendation reason"
                                                className=" w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                                        </div>


                                        <div className="!mt-5">
                                            <button type="submit" className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                                                Add Recommendation
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default View_Details;