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
      <div className="border-b-2 border-slate-200 pt-2 pb-3 max-w-xl cursor-pointer font-serif">
        <div className="flex items-center">
          <div><Avatar/></div>
          <div className="pl-3 font-semibold text-md">{authorName}</div>
          <div className="pl-2">&bull;</div>
          <div className="pl-3 text-slate-500 text-sm font-thin">{publisheddate}</div>
        </div>
        <div className="font-bold pt-1 text-lg">{title}</div>
        <div className="font-light text-sm">{content.slice(0, 100) + "...."}</div>
        <div className="text-xs pt-3 font-light text-slate-400">3 min read</div>
      </div>
    </Link>
  );
};

