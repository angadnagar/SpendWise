interface CardProps{
    title:string;
    monthlyPrice:string;
    yearlyPrice:string;
    isMonthly:boolean;
    features:string[]
}
export const PriceCard:React.FC<CardProps>=({title,monthlyPrice,yearlyPrice,isMonthly,features})=>{
    const price=isMonthly ? monthlyPrice : yearlyPrice
    const isFree=price.toLowerCase() === 'free'
    return (

        <div className="max-w-sm rounded-lg overflow-hidden shadow-xl m-4 p-6 pl-8 bg-white">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-900 font-bold text-2xl mb-4">{price} {!isFree && (isMonthly ? '/month' : '/year')}</div>
        <ul className="text-gray-700 text-base list-disc">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
      </div>
    )
}