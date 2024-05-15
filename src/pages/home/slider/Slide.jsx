import { Link } from "react-router-dom";

const Slide = ({ image }) => {
    return (
        <div>
            <div className='w-full bg-center relative z-0  h-[500px]'>
                <img className="w-full h-full z-0" src={image} alt="" />
                <div className="absolute left-20 lg:top-1/3 top-2/4 lg:w-3/5 ">
                    <h1 className=" text-white lg:text-5xl md:text-5xl text-3xl leading-5 ">Discover Sustainable Alternatives  for Everyday Products</h1>
                    <Link to='/queries' className="inline-flex my-5 items-center justify-center  px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Get Started
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Slide;