import Slider from 'react-slick'
const reviews = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'This service is amazing! Highly recommend to everyone. The user interface is intuitive, and the features are exactly what I needed to manage my expenses effectively. The support team is also very responsive and helpful. I have been using it for over a year now, and it has made a significant difference in how I handle my finances.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Excellent customer support and great features. I have been using this service for a few months now, and it has significantly helped me keep track of my finances. The detailed reports and analytics are very useful for budgeting. I particularly appreciate the ability to set custom categories for my expenses.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      feedback: 'A fantastic experience overall. Will use again! The integration with my bank accounts was seamless, and I can easily categorize and monitor my spending. Highly recommend for anyone looking to improve their financial health. The mobile app is also very convenient for logging expenses on the go.',
    },
    {
      id: 4,
      name: 'Alice Brown',
      feedback: 'Very satisfied with the service. Five stars! The interface is clean and easy to navigate, and I love the customizable dashboard. Being able to visualize my spending habits has helped me identify areas where I can save money. I also appreciate the regular updates and new features added by the development team.',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      feedback: 'Superb! The best service I have ever used. I have tried several expense tracking apps in the past, but none have been as comprehensive and user-friendly as this one. The ability to set spending goals and receive notifications when I am approaching my limits has been a game-changer for me. Keep up the excellent work!',
    },
  ]

export const Feedback=()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
   return (
    <div className="py-12">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">See what others say about our services</h1>
    </div>
    <div className="max-w-7xl mx-auto px-4">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="bg-gray-200 shadow-md rounded-lg p-6">
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="mt-2 text-gray-600">{review.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
   )
}