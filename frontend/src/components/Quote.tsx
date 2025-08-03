import axios from 'axios'
import { useEffect, useState } from 'react';
export const Quote=()=>
{
    interface Quote {
  id: number;
  quote: string;
  author: string;
}
    const [quote,setquote]=useState<Quote | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>
    {
        const fetchRandomquote=async ()=>{
        try{
            const {data:allquotes}= await axios.get("https://dummyjson.com/quotes")
            const totalquotes:number= allquotes.total;
            const randomid = Math.floor(Math.random()*totalquotes)+1;
            const {data:resquote}= await axios.get<Quote>(`https://dummyjson.com/quotes/${randomid}`)
            setquote(resquote);
    }
        catch(e){
            console.log("Error Fetching Quotes")
        }
        finally{
            setLoading(false)
        }
    };
        fetchRandomquote();
    },[])
    if (loading) return 
    <div className='bg-slate-200 h-screen flex justify-center flex-col'>
    <div className='flex justify-center' >
        <h1 className="max-w-md font-sans font-bold text-black text-3xl">"Something"</h1>
    </div>
    <div className='flex justify-left text-md font-semibold'>Author:Example</div>
    </div>
    
    if (!quote) return <div>No quote</div>;
    return <div className='bg-slate-300 min-h-screen flex justify-center flex-col'>
    <div className='flex justify-center' >
        <h1 className="max-w-lg font-sans font-bold text-black text-2xl">"{quote.quote}"</h1>
    </div><br></br>
    <div className=' max-w-xl text-right text-lg font-bold'>-{quote.author}</div>
    </div>
}
