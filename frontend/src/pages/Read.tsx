
import { LogBar } from "../components/LogBar"
import { useBlog } from "../hooks/Useblog"
import { FullBlog } from "../components/FullBlog";
import { useParams } from "react-router-dom";


export const Read=()=>
{
    const {id}=useParams()
    const {loading,GetOneBlog}=useBlog({
        id:id ||""
    });
    if(loading)
    {
        return <div>
            <LogBar/>
        </div>
    }
    return <div>
        
        {GetOneBlog && <FullBlog GetOneBlog={GetOneBlog} />}
    </div>
}