import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { InputContainer } from "../components/InputContainer"


export const Signin = ()=>{
    
    return (
        <div className="h-screen bg-gray-800">
        <div className="flex justify-center py-20 ">
        <div className=" border-2 border-white p-16 rounded-md">
            <h2 className="text-green-400 font-bold flex justify-center text-2xl mb-8">SpendWise</h2>
        <h2 className="flex justify-center mb-2 text-gray-200 text-lg font-bold">Sign In</h2>
            <InputContainer inputName={"Email"}/>
            <InputContainer inputName={"Password"}/>
      
        <Button buttonName={"Log in"}/>
        <Link to="/signup" className="text-white underline">Create a new account! Sign Up</Link>
        </div>
        </div>
        </div>
    )
}