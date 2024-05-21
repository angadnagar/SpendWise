import Aos from "aos";
import "aos/dist/aos.css";
import { ToggleButton } from "./ToggleButton";
import { PriceCard } from "./PriceCard";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaShieldAlt, FaSyncAlt, FaWallet } from "react-icons/fa";

export const PriceComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const plans = [
    {
      title: "Basic Plan",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      features: [
        "Bank accounts sync",
        "List of supported banks",
        "Automatic categorization",
        "Backup and sync",
        "Number of cash wallets: 1",
        "Number of budgets: 1",
        "Shared wallets with others: No",
        "Import/Export of transactions: No",
        "Secured data",
        "Detailed overview",
      ],
    },

    {
      title: "Premium Plan",
      monthlyPrice: "₹100",
      yearlyPrice: "₹1000",
      features: [
        "Bank accounts sync",
        "List of supported banks",
        "Automatic categorization",
        "Backup and sync",
        "Number of cash wallets: 5",
        "Number of budgets: 5",
        "Shared wallets with others: Yes",
        "Import/Export of transactions: Yes",
        "Secured data",
        "Detailed overview",
      ],
    },

    {
      title: "Gold Plan",
      monthlyPrice: "₹200",
      yearlyPrice: "₹2000",
      features: [
        "Bank accounts sync",
        "List of supported banks",
        "Automatic categorization",
        "Backup and sync",
        "Number of cash wallets: Unlimited",
        "Number of budgets: Unlimited",
        "Shared wallets with others: Yes",
        "Import/Export of transactions: Yes",
        "Secured data",
        "Detailed overview",
        "Priority customer support",
        "Advanced analytics and reports",
      ],
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle className="text-blue-500" size={40} />,
      title: 'Priority Support',
      description: 'Get access to our premium support 24/7 with priority responses.',
    },
    {
      icon: <FaShieldAlt className="text-green-500" size={40} />,
      title: 'Enhanced Security',
      description: 'Your data is protected with our top-notch security features.',
    },
    {
      icon: <FaSyncAlt className=" text-pink-500" size={40} />,
      title: 'Automatic Sync',
      description: 'Sync your data across all devices seamlessly.',
    },
    {
      icon: <FaWallet className=" text-amber-700" size={40} />,
      title: 'Unlimited Wallets',
      description: 'Manage as many wallets as you need with no restrictions.',
    },
  ];
  return (
    <div className=" bg-gray-200 min-h-screen p-6">
      <div className="text-center mb-6">
        <h1 className=" flex text-2xl font-serif font-bold flex-col">
          Come and Save <span>your Money with Us.</span>
        </h1>
      </div>

      <div className="text-center mb-6">
        <h1 className=" text-xl font-medium">
          Which Plan suits you?
        </h1>
      </div>

      <ToggleButton isMonthly={isMonthly} onToggle={handleToggle}/>

      <div className="flex flex-wrap justify-center">
        {plans.map((plan,index)=>(
            <div key={index} data-aos="fade-up" data-aos-delay={index*200}>
                <PriceCard
                  title={plan.title}
                  monthlyPrice={plan.monthlyPrice}
                  yearlyPrice={plan.yearlyPrice}
                  isMonthly={isMonthly}
                  features={plan.features}
                />
            </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <h1 className="flex flex-col justify-center text-gray-700 font-serif font-bold text-3xl gap-2" data-aos="fade-up" data-aos-delay="100">4 Reasons to start <span className="text-green-600 font-bold"> Spendwise Gold</span></h1>

        <div className="flex flex-wrap justify-center mt-4">
          {reasons.map((reason, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index*100} className="max-w-sm rounded-lg overflow-hidden shadow-2xl m-4 p-6 pl-8 bg-white flex flex-col items-center text-center">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-700 text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
