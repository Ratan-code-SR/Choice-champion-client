
const Slide = ({image,text}) => {
    return (
        <div>
            <div className='w-full bg-center  z-0  h-[400px]'>
                <img className="w-full h-full z-0" src={image} alt="" />   
            </div>
           
        </div>
    );
};

export default Slide;