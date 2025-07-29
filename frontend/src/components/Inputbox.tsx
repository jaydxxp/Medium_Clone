import type { ChangeEvent } from "react"
 interface Inputboxfields{
        label:string;
        placeholder:string;
        onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
        type?:string;
    }
export const Inputbox=({label,placeholder,onChange,type}:Inputboxfields)=>
{
    return <div>
   <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
    </div>
}