import { Button } from "../components/Button"
import { InputContainer } from "../components/InputContainer"


export const Signin = ()=>{
    
    return (
        <div className="h-screen bg-gray-800">
        <div className="flex justify-center py-20 ">
        <div className=" border-2 border-white p-16 rounded-md">
        <h2 className="flex justify-center mb-2 text-gray-200 text-lg font-bold">Sign In</h2>
            <InputContainer inputName={"Email"}/>
            <InputContainer inputName={"Password"}/>
      
        <Button buttonName={"Log in"}/>
        <a href="#" className="text-white underline">Create a new account Sign Up</a>
        </div>
        </div>
        </div>
    )
}