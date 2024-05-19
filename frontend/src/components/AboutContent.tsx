export const AboutContent = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="max-w-xl mx-auto p-10">
        <h1 className="text-gray-700 font-bold text-center text-3xl">
          SpendWise helps people worldwide to get a
        </h1>
        <h1 className="text-gray-700 font-bold text-center text-3xl">
          proper analysis of their spendings.
        </h1>
      </div>

      <div className="flex flex-wrap md:flex-row md:space-x-8 items-center justify-center p-10">
        <div className="flex flex-row justify-center items-center p-10">
          <div className="md:w-1/2 flex justify-between mr-8">
            <img
              src="/about-section-1.jpg"
              alt="aboutsection"
              className="  w-full h-auto rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-black mb-4">
              At SpendWise, we come to work every day with the mission of
              helping people make informed decisions about their finances.{" "}
              <span className="font-bold">
                We believe that managing money should be as simple and intuitive
                as shopping online. It should be accessible anytime, anywhere,
                with just a few clicks.
              </span>
            </p>
            <p className="text-gray-700  mb-4">
              What began as a straightforward expense tracker for a small group
              has evolved into a comprehensive personal finance app, empowering
              hundreds of thousands of users around the globe to take control of
              their financial well-being.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center p-10 mt-14">
          <div className="md:w-1/2">
            <p className="text-black mb-4">
              We want to make your financial life stress-free. SpendWise helps
              you get your finances in shape so that you don't need to stress
              about every dollar you spend.{" "}
              <span className="font-bold">
                Knowing how much you spend and where you spend it makes it
                easier to change your financial habits if you feel that's what
                you need.
              </span>
            </p>
            <p className="text-gray-700 mb-4">
              Having a complete picture of your finances in one place makes them
              easier to manage. Our mission is to help you leave your financial
              worries behind, overcome your financial fears, and equip yourself
              with financial wisdom.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-around ml-8">
            <img
              src="/about-section-2.jpg"
              alt="aboutsection"
              className=" w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
