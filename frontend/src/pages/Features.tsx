import { FaBell, FaChartLine, FaDollarSign, FaMobileAlt, FaShieldAlt, FaSyncAlt } from "react-icons/fa"
import { FeatureCard } from "../components/FeatureCard"

export const Features=()=>{
   return (
    <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Features</h2>

            <div className="flex flex-wrap justify-center">

            <div className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
            <FeatureCard
              title="Track Expenses"
              description="Monitor your spending and track your expenses easily."
              icon={<FaChartLine />}
              aosAnimation="fade-up"
              aosDelay={1200}
            />
          </div>

          

          <div className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
          <FeatureCard
            title="Manage Budget"
            description="Set budgets and manage your finances effectively."
            icon={<FaDollarSign />}
            aosAnimation="fade-up"
            aosDelay={1300}
          />
          </div>

          <div className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
          <FeatureCard
            title="Secure Data"
            description="Your data is safe and secure with our advanced encryption."
            icon={<FaShieldAlt />}
            aosAnimation="fade-up"
            aosDelay={1400}
          />
          </div>

           <div className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
           <FeatureCard
            title="Mobile Friendly"
            description="Access your financial data on the go with our mobile-friendly design."
            icon={<FaMobileAlt />}
            aosAnimation="fade-up"
            aosDelay={1500} // Delay in milliseconds
          />

          </div>

          <div className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
          <FeatureCard
            title="Automatic Sync"
            description="Keep your data in sync across all your devices effortlessly."
            icon={<FaSyncAlt />}
            aosAnimation="fade-up"
            aosDelay={1600} // Delay in milliseconds
          />

          </div>

          <div className="flex justify-center w-full sm:w-1/2 lg:w-1/3">
          <FeatureCard
            title="Alerts & Notifications"
            description="Get timely alerts and notifications to stay on top of your finances."
            icon={<FaBell />}
            aosAnimation="fade-up"
            aosDelay={1700} // Delay in milliseconds
          />
          </div>

            </div>

        </div>

    </div>
   )
}