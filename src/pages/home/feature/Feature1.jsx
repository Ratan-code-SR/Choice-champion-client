
const Feature1 = () => {
    return (
        <div>
            <section className="py-10 sm:py-5 lg:py-5">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                        <div className="">
                            <h2 className="text-2xl font-bold leading-tight text-emerald-500  sm:text-3xl lg:text-4xl">Please express your opinion on your favorite product.</h2>
                            <p className="mt-4 text-base leading-relaxed ">Feel free to let us know what you think about the product you like the most. Your feedback is valuable to us!.</p>
                        </div>
                        <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                                <img className="ml-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg" alt="" />
                                <img className="absolute -top-4 -left-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />

                                <div className="absolute -bottom-10 -left-16">
                                    <div className="bg-yellow-300">
                                        <div className="px-8 py-10">
                                            <span className="block text-4xl font-bold text-black lg:text-5xl"> 94% </span>
                                            <span className="block mt-2 text-base leading-tight text-black"> Highly Recommend<br />Everything </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature1;