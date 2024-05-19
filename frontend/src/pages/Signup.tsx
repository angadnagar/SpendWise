import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { InputContainer } from "../components/InputContainer"

export const Signup = ()=>{
    
    return (
        <div className="h-screen bg-gray-800">
        <div className="flex justify-center p-20">
  <div className="border-2 border-white p-16 rounded-md">
    <h2 className="text-green-400 font-bold flex justify-center text-2xl mb-8">SpendWise</h2>
    <h2 className="flex justify-center mb-2 text-gray-200 text-lg font-bold">Sign Up</h2>
    <InputContainer inputName={"Name"}/>
    <InputContainer inputName={"Email"}/>
    <InputContainer inputName={"Password"}/>
    <Button buttonName={"Create account"}/>     
    <Link to="/signin" className="flex justify-center text-center mt-4 text-white underline ">Already have an account! Sign in</Link>
  </div> 
</div>
</div>

    )
}