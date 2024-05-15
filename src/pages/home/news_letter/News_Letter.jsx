

const News_Letter = () => {
    return (
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 py-20 px-6 relative font-[sans-serif]">
            <div className="max-w-2xl mx-auto text-center text-white">
                <h2 className="text-4xl font-extrabold"
                data-aos="flip-left"
                data-aos-duration="1500"
                >Subscribe to Our Newsletter</h2>
                <div className="my-6">
                    <p className="text-base text-gray-200"
                      data-aos="flip-right"
                      data-aos-duration="1500"
                    >Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!</p>
                </div>
                <div className="max-w-2xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center shadow-lg absolute -bottom-10"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                >
                    <input type="email" placeholder="Enter your email" className="w-full bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none" />
                    <button className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold py-3.5 px-6 focus:outline-none">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News_Letter;