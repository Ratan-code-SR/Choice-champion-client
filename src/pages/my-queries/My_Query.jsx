import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const My_Query = ({ queries, setQueriesData, queriesData }) => {
    // console.log(data);
    const {_id} = queries;


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
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={queries.Product_Image} alt="Product Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Date: {queries.Current_Time}</h2>
                    <h2 className="card-title">Date: {queries.Current_Date}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-between items-center">
                        <p>{queries.User_Name}</p>
                        <img className="w-10 h-10 rounded-full" src={queries.User_Image} alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to={`/update/${_id}`}  className="btn btn-secondary">Edit</Link>
                        <button onClick={() => handleDelete(queries._id)} className="btn btn-secondary">Delete</button>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default My_Query;