
import product from '../../../assets/banner/product.jpeg'

const Banner = () => {
    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <h1 className='text-center text-xl font-bold py-1'>Lorem ipsum dolor sit, amet</h1>
                <p className='text-center py-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit  amet consectetur adipisicing elit</p>

            </div>

            <div div className="hero bg-[#f8f4f5] lg:h-[250px]" >
                <div className="hero-content flex-col lg:flex-row-reverse lg:h-[250px]">
                    <img src={product} className="max-w-sm rounded-lg h-full" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">View All Queries</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;