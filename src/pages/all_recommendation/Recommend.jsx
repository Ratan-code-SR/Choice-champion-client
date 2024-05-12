import { FaHandPointRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";

const Recommend = ({ recommend }) => {
    const { recommend_image, recommend_product, recommend_reason, recommend_title, recommend_userEmail, recommend_userName, query_id, query_title, product_name, query_userName, query_userEmail, current_date } = recommend;
    return (
        <div className="cursor-pointer rounded overflow-hidden group">
            <div className="relative overflow-hidden">
                <img src={recommend_image} alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">{current_date}</div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold ">Recommended Product</h3>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="px-4 py-2 w-full mt-10 rounded  text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>View all recommended information</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle z-0">
                    <div className="modal-box relative ">
                        {/* recommended details  */}
                        <div className="font-sans">
                            <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                                <div className="grid items-start gap-12">
                                    <div className="lg:col-span-3 bg-gray-100 rounded-sm w-full top-0 text-center p-8">
                                        <img src={recommend_image} alt="Product" className="w-full rounded object-cover mx-auto" />
                                        <hr className="border-white border-2 my-6" />
                                    </div>
                                    <div className="lg:col-span-2">
                                        <h2 className="text-2xl font-extrabold text-gray-800">{recommend_product}</h2>
                                        <div className="mt-8">
                                            <h3 className="text-lg font-bold text-gray-800">About the Recommended</h3>
                                            <ul className="  mt-4 pl-4 text-sm text-gray-800">
                                                <p className="font-bold">Recommended Title:</p>
                                                <li className="flex gap-2"><span><FaHandPointRight /></span>{recommend_title}</li>
                                                <p className="font-bold">Recommended Reason:</p>
                                                <li className="flex gap-2"><span><FaHandPointRight /></span>{recommend_reason}</li>

                                            </ul>
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-sm text-center font-bold text-gray-800">The information of the person who recommended this product.</h3>
                                            <p className="flex justify-center items-center gap-2"> <span><CgProfile /></span>
                                                <span>{recommend_userName}</span>
                                            </p>
                                            <p className="flex justify-center items-center gap-2"> <span><MdOutlineEmail /></span>
                                                <span>{recommend_userEmail}</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn absolute top-2 right-2 z-10">X</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default Recommend;