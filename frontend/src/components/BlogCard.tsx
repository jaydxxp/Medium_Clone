import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publisheddate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publisheddate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 py-4 max-w-2xl mx-auto cursor-pointer font-serif px-4 sm:px-0">
        
        <div className="flex flex-wrap items-center text-sm sm:text-base text-slate-600">
          <div className="mr-2">
            <Avatar />
          </div>
          <span className="font-semibold">{authorName}</span>
          <span className="mx-2">&bull;</span>
          <span className="text-slate-500">{publisheddate}</span>
        </div>

        
        <h2 className="text-lg sm:text-xl font-bold pt-2 text-black leading-snug">
          {title}
        </h2>

        
        <p className="text-sm sm:text-base font-light text-gray-700 pt-1">
          {content.slice(0, 100) + "…"}
        </p>

        
        <div className="text-xs text-slate-400 font-light pt-2">3 min read</div>
      </div>
    </Link>
  );
};
