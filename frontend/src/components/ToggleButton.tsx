interface ToggleProps{
    isMonthly:boolean;
    onToggle:()=>void
}

export const ToggleButton:React.FC<ToggleProps>=({isMonthly,onToggle})=>{
   return(
    <div className="flex justify-center mb-8">
        <button className={`px-4 py-2 font-semibold rounded-l-lg transition-colors duration-300 ${isMonthly ? 'bg-green-500 text-white' : 'bg-white'} rounded-l-full`} onClick={onToggle}>
            Monthly
        </button>

        <button className={`px-4 py-2 font-semibold rounded-r-lg transition-colors duration-300 ${!isMonthly ? 'bg-green-500 text-white' : 'bg-white'} rounded-r-full`} onClick={onToggle}>
            Yearly
        </button>

    </div>
   )
}