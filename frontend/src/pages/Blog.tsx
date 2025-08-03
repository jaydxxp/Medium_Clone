
import { BlogCard } from "../components/BlogCard"
import { LogBar } from "../components/LogBar"

import { useBlogs } from "../hooks/Useblog"
export const Blog=()=>
{
   const{loading , Feed}=useBlogs()
    if(loading)
    {
        return <div>
            <LogBar/>
        </div>
    }
    
    return <div>
        <LogBar/>
    <div className="flex justify-center">
        <div className="max-w-xl">
        {Feed.map(blog=> <BlogCard
        id={blog.id}
            authorName ={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publisheddate="29/4"

        />)}
         </div>
    </div>
    </div>
    
}