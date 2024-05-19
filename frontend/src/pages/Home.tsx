import { Banner } from "../components/Banner"
import { Details } from "../components/Details"
import { Feedback } from "../components/Feedback"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Features } from "./Features"


export const Home=()=>{
    return <div>
        <Navbar/>
        <Banner/>
        <Details/>
        <Features/>
        <Feedback/>
        <Footer/>
    </div>
}