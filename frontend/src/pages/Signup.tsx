import { Button } from "../components/Button"
import { InputContainer } from "../components/InputContainer"

export const Signup = ()=>{
    
    return (
    
        <div className="flex justify-center mt-20">
  <div className="border-2 border-white p-10 rounded-md">
    <h2 className="flex justify-center mb-2 text-gray-200 text-lg font-bold">Sign Up</h2>
    <InputContainer inputName={"Name"}/>
    <InputContainer inputName={"Email"}/>
    <InputContainer inputName={"Password"}/>
    <Button buttonName={"Create account"}/>     
    <a href="#" className="flex justify-center text-center mt-4 text-white underline ">Have an account? Log in</a>
  </div> 
</div>

    )
}