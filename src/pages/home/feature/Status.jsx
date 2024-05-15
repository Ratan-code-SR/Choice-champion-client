

const Status = () => {
    return (
        <div>
            <div className="px-8 py-14 font-sans">
                <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-4xl font-bold text-emerald-500"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                          data-aos="zoom-in-right"
                        >Our  System Status</h1>
                        <p className="mt-6 text-sm"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                          data-aos="zoom-in-right"
                        >We keep you updated on the performance of our Alternative Product Information System, ensuring transparency and reliability. Real-time updates on system availability and maintenance activities help maintain seamless user experiences. Trust in our commitment to excellence as we continually enhance our platform for your benefit.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-[#3e3e3e] flex flex-col items-center text-center rounded md:p-8 p-6"
                             data-aos="zoom-in"
                             data-aos-delay="100"
                             data-aos-duration="1000"
                             data-aos-easing="ease-in-out"
                        >
                            <h3 className="lg:text-5xl text-3xl font-extrabold text-emerald-500">1M</h3>
                            <div className="mt-4">
                                <p className="text-sm text-white">Total Users</p>
                            </div>
                        </div>
                        <div className="bg-[#3e3e3e] flex flex-col items-center text-center rounded md:p-8 p-6"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <h3 className="lg:text-5xl text-3xl font-extrabold text-emerald-500">$97K</h3>
                            <div className="mt-4">
                                <p className="text-sm text-white">Revenue</p>
                            </div>
                        </div>
                        <div className="bg-[#3e3e3e] flex flex-col items-center text-center rounded md:p-8 p-6"
                         data-aos="zoom-in"
                         data-aos-delay="100"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                        >
                            <h3 className="lg:text-5xl text-3xl font-extrabold text-emerald-500">90K</h3>
                            <div className="mt-4">
                                <p className="text-sm text-white">Engagement</p>
                            </div>
                        </div>
                        <div className="bg-[#3e3e3e] flex flex-col items-center text-center rounded md:p-8 p-6"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                         
                        >
                            <h3 className="lg:text-5xl text-3xl font-extrabold text-emerald-500">99.9%</h3>
                            <div className="mt-4">
                                <p className="text-sm text-white">Server Uptime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Status;