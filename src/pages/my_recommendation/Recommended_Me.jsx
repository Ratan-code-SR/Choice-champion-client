import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";

const Recommended_Me = () => {
    const [recommendedForMeData, setRecommendedForMeData] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const URL = `${import.meta.env.VITE_API_URL}/recommend`
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setRecommendedForMeData(res.data)
                setLoading(false)

            })
    }, [URL])

    const recommendsMe = recommendedForMeData.filter(me => me.query_userEmail === user?.email)
    if (loading) {
        return <div className="w-16 my-20 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (
        <div>
            <div>
                <h1 className="my-10 text-center font-bold text-3xl">Recommendation For Me</h1>
                {
                    recommendsMe.length > 0 ?
                        <>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>No:</th>
                                            <th>Product Image</th>
                                            <th>Recommender Name</th>
                                            <th>Recommender Email </th>
                                            <th>Product Name</th>
                                            <th>Recommended Title</th>
                                            <th>Recommended Reason</th>

                                        </tr>
                                    </thead>
                                    {
                                        recommendsMe.map((recommend, index) =>
                                            <tbody key={recommend._id}>
                                                <tr className="bg-base-200">
                                                    <th>{index + 1}</th>
                                                    <td><img className="w-10 h-10" src={recommend.recommend_image} alt="product image" /></td>
                                                    <td>{recommend.recommend_userName}</td>
                                                    <td>{recommend.recommend_userEmail}</td>
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

                                                </tr>
                                            </tbody>
                                        )
                                    }
                                </table>
                            </div>
                        </>
                        :
                        <>
                            <h1 className="text-center my-20 font-bold">Not recommendation for you!!</h1>
                        </>
                }
            </div>
        </div>
    );
};

export default Recommended_Me;