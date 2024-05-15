import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const My_Recommendation = () => {
    const { user } = useContext(AuthContext)
    const [myRecommendedData, setMyRecommendedData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        document.title = "My Recommended | ChoiceChampion"
    }, [])


    const URL = `${import.meta.env.VITE_API_URL}/recommend/email/${user?.email}`
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setMyRecommendedData(res.data)
                setLoading(false)
            })
    }, [user?.email])
    const handleRecommendButton = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete recommend!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/recommend/${id}`, {
                    method: "DELETE"
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recommend has been deleted.",
                                icon: "success"
                            });
                            const remaining = myRecommendedData.filter(query => query._id !== id)
                            console.log(remaining);
                            setMyRecommendedData(remaining)
                        }

                    })
            }
        });
    }

    if (loading) {
        return <div className="w-16 my-20 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    // console.log(myRecommendedData);
    return (
        <div>
            <h1 className="my-10 text-center font-bold text-3xl">My All Recommendations</h1>
            {
                myRecommendedData.length > 0 ?
                    <>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No:</th>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Recommended Title</th>
                                        <th>Recommended Reason</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                {
                                    myRecommendedData.map((recommend, index) =>
                                        <tbody key={recommend._id}>
                                            <tr className="bg-base-200">
                                                <th>{index + 1}</th>
                                                <td><img className="w-10 h-10" src={recommend.recommend_image} alt="product image" /></td>
                                                <td>{recommend.product_name}</td>
                                                <td>{recommend.recommend_title}</td>
                                                <td>{recommend.recommend_reason.slice(0, 100)}...

                                                    <button className="text-blue-500" onClick={() => document.getElementById('my_modal_1').showModal()}>view all</button>
                                                    <dialog id="my_modal_1" className="modal ">
                                                        <div className="modal-box relative">

                                                            <p className="py-4">{recommend.recommend_reason}</p>
                                                            <div className="modal-action">
                                                                <form method="dialog">

                                                                    <button className="btn absolute top-0 right-0 text-black font-bold text-xl">X</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </dialog>

                                                </td>
                                                <td title="delete" className="text-2xl text-red-500 font-bold"><button onClick={() => handleRecommendButton(recommend._id)}><MdDelete /></button></td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </>
                    :
                    <>
                    <h1 className="text-center my-20 font-bold">You don't add recommended</h1>
                    </>
            }
        </div>
    );
};

export default My_Recommendation;