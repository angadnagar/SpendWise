interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    aosAnimation:string
    aosDelay?:number
  }

export const FeatureCard: React.FC<FeatureCardProps>=({title,description,icon,aosAnimation,aosDelay})=>{
   return(
    <div className="bg-white shadow-md rounded-lg p-6 m-4 flex flex-col items-center text-center" data-aos={aosAnimation} data-aos-delay={aosDelay}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
   )
}