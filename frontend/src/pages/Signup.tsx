import { Auth } from "../components/Auth"
import { Navbar } from "../components/Navbar"
import { Quote } from "../components/Quote"

export const Signup=()=>{
    return <div>
        <Navbar/>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
            <Auth type="signup"/>
        </div>
        <div className="hidden lg:block">
        <Quote></Quote>
        </div>
    </div> 
    </div>
}