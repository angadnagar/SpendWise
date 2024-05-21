import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { About } from "./pages/About"
import { Pricing } from "./pages/Pricing"

export const App=()=>{

  useEffect(()=>{
    AOS.init({
      once:true,
      offset:120
    })
  },[])

    return(
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
        </BrowserRouter>
        
  
    )
}
