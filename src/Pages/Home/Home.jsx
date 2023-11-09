import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div>
            <div className="bg-banner-bg bg-no-repeat bg-cover bg-center">
                <div id="banner-overlay" className="space-y-5 pt-40 lg:pb-36 md:pb-36 pb-20 px-5">
                    <h2 className="text-center lg:text-5xl md:text-4xl text-3xl text-white font-bold">Find the best jobs</h2>
                    <p className="text-center text-xl text-white max-w-[600px] mx-auto">40,000+ Blue Economy jobs in San Diego. Find current openings here and join the Blue Economy.</p>
                    <form className="lg:w-[500px] md:w-[450px] max-w-[400px] mx-auto flex">
                        <input className="bg-white border py-4 px-4 text-sm text-[#BBB766] rounded-l-lg outline-none w-3/4" type="text" name="text" placeholder="Search here...." />
                        <input className="bg-[#FF444A] py-4 sm:px-7 px-0 font-semibold text-white rounded-r-lg w-1/4" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <JobCategory></JobCategory>
            <div>
                <div className="px-5 md:px-0 bg-[#212529] py-20">
                    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 pt-8 gap-y-10 px-5">
                        <div data-aos="fade-right" className="space-y-5">
                            <p className="text-[#E2012D] text-2xl md:text-4xl font-semibold font-oswald">3 TI CHAMP</p>
                            <p className="text-white text-2xl md:text-4xl font-semibold font-oswald">5 MAJOR CHAMP</p>
                            <p className="text-white text-2xl md:text-4xl font-semibold font-oswald">4 MINOR CHAMP</p>
                            <p className="text-white text-2xl md:text-4xl font-semibold font-oswald">2 RUNNER UP</p>
                            <p className="text-white text-2xl md:text-4xl font-semibold font-oswald">10 MVP</p>
                            <p className="text-white text-2xl md:text-4xl font-semibold font-oswald">3 BEST TEAM</p>
                        </div>
                        <div data-aos="zoom-in" className="pt-1">
                            <iframe className="w-full md:h-full h-60" src="https://www.youtube.com/embed/bPGII-yNeFw?si=QgD6c21rolpvKHp1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-b-4 border-[#E2012D]">
                    <img className="max-w-[40px] mx-auto -mb-5" src="logo-3.png" alt="" />
                </div>
            </div>
            <div>
                <div className="bg-white py-14 ">
                </div>
                <div data-aos="fade-up" className="bg-[#E2012D] lg:flex grid max-w-[1140px] lg:mx-auto mx-5 py-20 px-5 lg:p-0">
                    <div className="space-y-3 lg:p-12">
                        <p className="font-oswald lg:text-4xl text-3xl text-center lg:text-left font-semibold text-white">MORE THAN 10K+ MEMBERS</p>
                        <p className="font-oswald lg:text-4xl text-3xl text-center lg:text-left font-semibold text-[#091022]">JOIN OUR GUILD NOW!</p>
                    </div>
                    <div className="lg:p-12 pt-4 flex lg:items-center lg:justify-start justify-center">
                        <button className="py-2.5 px-12 bg-[#091022] rounded-tr-full lg:text-lg text-base font-oswald font-medium text-white hover:bg-white hover:text-[#091022]">BECOME MEMBER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;