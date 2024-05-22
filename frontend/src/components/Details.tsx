export const Details=()=>{
    return(
        <div className="flex flex-wrap justify-center">
        {/* first section */}
        <div className="flex flex-row justify-center items-center p-4">

            <div className=" w-5/12 p-8">
                <img className=" h-auto" src="/about-1.jpg" alt="expenser" data-aos="fade-up" data-aos-delay="200" />
            </div>
            <div className="w-1/2 p-8 " data-aos="fade-down" data-aos-delay="200">
                <h2 className=" text-2xl font-bold mb-4">Effortless Expense Tracking</h2>
                <p className="text-gray-500 text-lg">Easily input and categorize expenses with minimal effort.Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
            </div>

            
        </div>


          {/* second section */}
        <div className="flex flex-row justify-center items-center p-4">

            <div className="w-5/12 p-8 " data-aos="fade-down" data-aos-delay="200">
                <h2 className=" text-2xl font-bold mb-4">Real-time Updates</h2>
                <p className="text-gray-500 text-lg">View updated expense summaries and totals in real-time. Stay informed about your financial status with just a glance</p>
            </div>

            <div className=" w-5/12 p-8">
                <img className=" h-auto" src="/about-2.jpg" alt="expenser" data-aos="fade-up" data-aos-delay="200" />
            </div>
            
        </div>
         
         {/* third section */}
        <div className="flex flex-row justify-center items-center p-4">

            <div className=" w-5/12 p-8 ">
                <img className=" h-auto" src="/about-3.jpg" alt="expenser" data-aos="fade-up" data-aos-delay="400" />
            </div>
            <div className="w-1/2 p-8 " data-aos="fade-down" data-aos-delay="400">
                <h2 className=" text-2xl font-bold mb-4">Customizable Categories</h2>
                <p className="text-gray-500 text-lg">Tailor expense categories to fit your unique spending habits. Personalize your tracking for more accurate financial management.</p>
            </div>

        
        </div>

        {/* fourth section */}

        <div className="flex flex-row justify-center items-center p-4">

            <div className="w-5/12 p-8 " data-aos="fade-down" data-aos-delay="400">
                <h2 className=" text-2xl font-bold mb-4">Budget Management</h2>
                <p className="text-gray-500 text-lg">Set personalized budget goals to manage your spending. Monitor progress to ensure you stay on track financially.</p>
            </div>

            <div className=" w-5/12 p-8">
                <img className=" h-auto" src="/about-4.jpg" alt="expenser" data-aos="fade-up" data-aos-delay="400" />
            </div>
            
        </div>


        </div>
        
        
    )
}