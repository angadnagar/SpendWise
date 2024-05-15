
interface InputContainerProps{
    inputName:string
}

export const InputContainer=({inputName}:InputContainerProps)=>{
    return(

    <div className="flex items-center border-b border-gray-500 py-2 ">
        
    <input
    type="text"
    placeholder={inputName}
    className="w-full px-2 py-2 outline-none border-none bg-transparent text-white"
  />
  </div>

    )
}