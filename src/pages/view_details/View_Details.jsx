import { useLoaderData, useParams } from "react-router-dom";


const View_Details = () => {
    const queries = useLoaderData()
    const {id}= useParams()
    const query = queries.find(data => data._id === id)

    
    return (
        <div>
            <h2>{query.Current_Time}</h2>
            <h1>hello ratan</h1>
        </div>
    );
};

export default View_Details;