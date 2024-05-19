
export const Banner=()=>{
     return(
        <div className="bg-gray-800 text-white text-center py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-green-400">SpendWise</span>
            </h1>
          <p className="mt-2 text-lg">Manage your expenses effortlessly.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Track your expenses</h2>
          <p className="mt-2 text-lg">Stay on top of your finances and save money.</p>
        </div>

        <button className=" p-2 mt-6 rounded-md bg-green-600 font-bold w-40 hover:bg-opacity-60">Download Now</button>
      </div>
     )
}