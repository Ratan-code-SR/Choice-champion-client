import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/provider/ContextProvider";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const Update = () => {
    const [updatedQueries, setUpdateQueries] = useState([])
    const { loading, user } = useContext(AuthContext)
    const myAddQueries = useLoaderData()
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const Current_Date = year + "-" + month + "-" + day;
    const Current_Time = hours + ":" + minutes + ":" + seconds;

    console.log(myAddQueries);
    const {
        Product_Image,
        Brand_Name,
        Product_Name,
        Query_Title,
        Boycotting_Reason,
        _id
    } = myAddQueries;

    const URL = `${import.meta.env.VITE_API_LOCAL}/query/id/${_id}`
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setUpdateQueries(res.data)
            })
    }, [URL])

    // console.log(myAddQueries);
    const handleQueryDateEdit = (e) => {
        e.preventDefault()
        const form = e.target;
        const Product_Image = form.Product_Image.value;
        const Query_Title = form.Query_Title.value;
        const Product_Name = form.Product_Name.value;
        const Brand_Name = form.Brand_Name.value;
        const Boycotting_Reason = form.Boycotting.value;
        const User_Name = user.displayName;
        const User_Email = user.email;
        const User_Image = user.photoURL;
        const recommendationCount = 0;
        const updateInfo = { Product_Image, Query_Title, Product_Name, Brand_Name, Boycotting_Reason, User_Name, User_Image, User_Email, recommendationCount, Current_Date, Current_Time }
        // console.log(updateInfo);

        fetch(`${import.meta.env.VITE_API_LOCAL}/query/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateInfo),
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Item updated successful.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            });
            setUpdateQueries(updateInfo)
    }

    if (loading) {
        return <div className="w-16 my-20 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (

        <div className="font-[sans-serif] text-[#333]">
            <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[160px] sm:p-6 p-4">
                <h4 className="sm:text-3xl text-2xl font-bold text-white">Update your Queries</h4>
            </div>
            <div className="mx-4 mb-4 -mt-16">
                <form onSubmit={handleQueryDateEdit} className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
                    <div
                        className="my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p
                            className="mx-4 text-center">
                            Update You Queries Information
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
                        <div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure><img className="w-full h-[200px]" src={updatedQueries.Product_Image} alt="Product" /></figure>
                                <div className="card-body">
                                    <h1>Product Name:{updatedQueries.Product_Name}</h1>
                                    <h1>Brand Name:{updatedQueries.Brand_Name}</h1>
                                    <h1>Query Title:{updatedQueries.Query_Title}</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="text-sm mb-2 block">Product Image</label>
                                <input
                                    name="Product_Image"
                                    type="text"
                                    defaultValue={Product_Image}
                                    placeholder="Product Image"
                                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Product Name</label>
                                <input
                                    name="Product_Name"
                                    type="text"
                                    defaultValue={Product_Name}
                                    placeholder="Product Name"
                                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Brand Name</label>
                                <input
                                    name="Brand_Name"
                                    type="text"
                                    defaultValue={Brand_Name}
                                    placeholder="Brand Name"
                                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Query Title</label>
                                <textarea
                                    name="Query_Title"
                                    type="text"
                                    defaultValue={Query_Title}
                                    placeholder="Query Title"
                                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            </div>

                            <div>
                                <label className="text-sm mb-2 block">Boycotting Reason Details</label>
                                <textarea
                                    name="Boycotting"
                                    type="text"
                                    defaultValue={Boycotting_Reason}
                                    placeholder="Boycotting Reason Details"
                                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            </div>
                            <div className="!mt-5">
                                <button type="submit" className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                                    Update Query
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default Update;