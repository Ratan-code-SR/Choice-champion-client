
import { FaLongArrowAltRight } from "react-icons/fa";
const Feature3 = () => {
    return (
        <div>
            <section className="p-8 font-[sans-serif] border shadow-sm">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl lg:text-5xl  mb-6 md:!leading-[55px] text-emerald-500">Unlock Premium Features</h2>
                        <p className="lg:text-xl text-md mb-8">Upgrade to our premium plan and supercharge your experience. Don't miss out!</p>
                        <button className="bg-[#fde047] text-emerald-500 flex items-center hover:bg-opacity-80 py-3 px-10 text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl gap-2 justify-center lg:mx-0 mx-auto">
                            <span>Unlock Now</span>
                            <span><FaLongArrowAltRight /></span>
                        </button>
                    </div>
                    <div className="text-center">
                        <img src="https://readymadeui.com/feature-img.webp" alt="Premium Benefits" className="w-[300px] mx-auto" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Feature3;