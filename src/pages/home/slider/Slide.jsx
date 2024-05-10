
const Slide = ({image,text}) => {
    return (
        <div>
            <div className='w-full bg-center relative   h-[400px]'>
                <img className="w-full h-full  z-0" src={image} alt="" />   
            </div>
            <div className="absolute top-1/2 right-1/2 z-10">
            <h1 >hello ratan</h1>
            </div>
            
        </div>
    );
};

export default Slide;