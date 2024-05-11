

const My_Query = ({data}) => {
    // console.log(data);
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={data.User_Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Date: {data.Current_Time}</h2>
                    <h2 className="card-title">Date: {data.Current_Date}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default My_Query;