import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
const My_Query = ({ queries, setQueriesData, queriesData }) => {
    // console.log(data);
    const { _id, Product_Image, Query_Title, Product_Name, Brand_Name, Boycotting_Reason, User_Name, User_Image, User_Email, recommendationCount, Current_Date, Current_Time } = queries;


    // handleDelete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/query/${id}`, {
                    method: "DELETE"
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success"
                            });
                            const remaining = queriesData.filter(query => query._id !== id)
                            console.log(remaining);
                            setQueriesData(remaining)
                        }

                    })
            }
        });
    }

    return (
        <div>
            <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300 relative">
                <img src={Product_Image} alt="Blog Post 1" className="lg:w-2/5 min-h-[250px] md:h-full h-[300px] lg:object-cover" />
                <div className="p-6 lg:w-3/5">
                    <h3 className="text-xl font-bold text-[#333]">{Query_Title}</h3>
                    <span className="text-sm block text-gray-400 mt-2">{Current_Date} | BY {User_Name}</span>
                    <p title={Boycotting_Reason} className="text-sm mt-4">{Boycotting_Reason.slice(0, 100)}...</p>
                    <button onClick={() => handleDelete(queries._id)} className="text-4xl font-bold absolute top-0 right-0 text-red-500"><TiDeleteOutline /></button>
                    <Link to={`/update/${_id}`}>
                        <button className="text-3xl font-bold absolute top-1/4 right-0 text-green-500"><FiEdit /></button>
                    </Link>

                    <Link to={`/viewDetails/${_id}`}>
                        <button className="inline-flex mt-3 items-center justify-center w-full px-4 py-2 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            View Details
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default My_Query;


