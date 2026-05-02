import { Link, useParams } from "react-router-dom";



import { useEffect } from "react";

import { ArrowRight, Dot } from "lucide-react";

import { blogPosts } from "../../data/blog";
import BlogList from "./BlogList";

export default function  BlogDetails() {

  let  { slug } = useParams();
  let post = blogPosts.find(p => p.slug === slug);
 useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!post) return <div className="text-center mt-20">Post Not Found</div>;

  
  let relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
    console.log(post.canonical)
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-32 relative">
    
      
      <div className="text-sm text-gray-500 mb-6 flex">
        <span><Link to={"/"}>Home</Link></span> <ArrowRight size={14} className="mt-1" /> <span><Link to={"/blog"}>blog</Link></span> <ArrowRight size={14} className="mt-1" />
        <span className="text-gray-800 font-medium"> {post.category}</span>
      </div>

      <h1 className="text-4xl font-bold">{post.title}</h1>

      <div className="mt-3 flex items-center gap-4 text-gray-500 text-sm">
        
        <span>{post.author}</span> <Dot size={14} className="mt-1"/> <span>{post.date}</span> 
      </div>

      <div className="grid grid-cols-1  gap-10 mt-10">
          <div className="">
        <img src={post.thumbnail} className="w-full h-full " />
        
      </div>
      
        <div
          className="prose prose-lg max-w-none"
        >
            {post.content}
            </div>

      
      </div>



{/* RELATED BLOGS */}
{relatedPosts.length > 0 && (
  <div className="mt-16">

    <h2 className="text-2xl font-semibold mb-6">
      Related Blog
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {relatedPosts.map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={item.thumbnail}
              alt=""
              className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-4">

            <span className="text-xs text-amber-500 font-semibold">
              {item.category}
            </span>

            <h3 className="text-lg font-semibold mt-2 line-clamp-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {item.metadescription}
            </p>

            <Link
              to={`/blog/${item.slug}`}
              className="inline-flex items-center gap-1 mt-4 text-amber-600 font-medium hover:gap-2 transition"
            >
              Read More <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      ))}

    </div>

  </div>
)}
    </div>
  );
}

