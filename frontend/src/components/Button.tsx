
interface ButtonProps{
    buttonName:string
}

export const Button=({buttonName}:ButtonProps)=>{
    return (
        <div className="flex justify-center p-6">
            <button className=" flex justify-center w-full border rounded-full bg-neutral-100 text-black font-medium p-1">{buttonName}</button>
        </div>
    )
}