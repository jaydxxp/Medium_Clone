import { Link } from "react-router-dom"
import { Inputbox } from "./Inputbox"
import { useState, type ChangeEvent } from "react"
import type {SignupInput} from "@jaydeeppp/medium-blog"
export const Auth =({ type }: { type: "signup" | "signin" })=>{
      const [Inputfields,setInputfields]=useState<SignupInput>(
        {
            name:"",
            username:"",
            email:"",
            password:""

        }
    )
     
     return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type==="signup" ?"Create an account":"Log into Account"}
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type==="signup" ?<Inputbox label="Name" placeholder="Jaydeep Wagaskar" onChange={(e) => {
                        setInputfields({
                            ...Inputfields,
                            name: e.target.value
                        })
                    }} /> : null }
                    <Inputbox label="Username" placeholder="jay" onChange={(e) => {
                            setInputfields({
                                ...Inputfields,
                                username: e.target.value
                            })
                    }} />
                    {type==="signup" ?<Inputbox label="Email" placeholder="jay@gmail.com" onChange={(e) => {
                        setInputfields({
                            ...Inputfields,
                            email: e.target.value
                        })
                    }} /> :null}
                    <Inputbox label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setInputfields({
                            ...Inputfields,
                            password: e.target.value
                        })
                    }} />
                    <button  type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
    
}