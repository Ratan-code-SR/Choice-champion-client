
import { Link } from 'react-router-dom';
import product from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <h1 className='text-center text-xl font-bold py-1'>Lorem ipsum dolor sit, amet</h1>
                <p className='text-center py-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit  amet consectetur adipisicing elit</p>

            </div>
            <div className="relative z-0 font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src={product} alt="Banner Image" className="absolute inset-0 w-full lg:h-[300px] h-full object-cover " />
                <div className="lg:min-h-[300px] h-full relative z-50  max-w-6xl  flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-3xl text-2xl font-bold md:mb-6 md:block hidden">Welcome to the Alternative Product Information System</h2>
                    <h1 className='sm:text-xl md:text-xl font-bold md:mb-6'>To learn about your favorite product, click here to "See All Queries" now.</h1>
                    <Link to="/queries"
                        className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        See All Queries
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Banner;