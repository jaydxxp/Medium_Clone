import axios from "axios";
import { useEffect, useState } from "react"
import { BackendUrl } from "../config";

 export interface Blog{
    "title":string,
   "content":string,
    "author":{"name":string}
    "id":string

}
export const useBlogs=()=>
{
    const[loading,setloading]=useState(true);
    const[Feed,setFeed]=useState<Blog[]>([]);

    useEffect(()=>
    {
        axios.get(`${BackendUrl}/blog/feed`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>
        {
            setFeed(response.data.Feed);
            setloading(false);
        })
        
    },[])
    return {loading,Feed}

}
export const useBlog=({id}:{id:string})=>
{
    const[loading,setloading]=useState(true);
    const[GetOneBlog,setGetOneBlog]=useState<Blog>();

    useEffect(()=>
    {
        axios.get(`${BackendUrl}/blog/read/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>
        {
            setGetOneBlog(response.data.GetOneBlog);
            setloading(false);
        })
        
    },[])
    return {loading,GetOneBlog}
}