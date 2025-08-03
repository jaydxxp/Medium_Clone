import type { Blog } from "../hooks/Useblog"
import { LogBar } from "./LogBar"

export const FullBlog = ({ GetOneBlog }: { GetOneBlog: Blog }) => {
  return (
    <div className="font-serif"> 
      <LogBar />

      <div className="flex justify-center px-6 py-10">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="text-5xl font-extrabold">
              {GetOneBlog.title || "Taxing Laughter: The Joke Tax Chronicles"}
            </div>
            <div className="text-slate-500 pt-2 text-sm italic">
              Posted on 23 January
            </div>
            <div className="pt-6 text-base leading-relaxed text-gray-800">
              {GetOneBlog.content}
            </div>
          </div>

          
          <div className="md:col-span-1">
            <div className="text-gray-500 font-medium text-sm">Author</div>
            <div className="text-xl font-bold pt-1">
              {GetOneBlog.author?.name || "Jokester"}
            </div>
            <div className="text-gray-500 text-sm pt-1 italic">
              Master of mirth, purveyor of puns, and the funniest person in the kingdom.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
