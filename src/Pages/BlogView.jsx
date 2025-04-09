import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../util/blog";
import BlogBody from "../Components/blog/blogBody";
import RoundedHeader from "../Components/RoundedHeader";

function BlogView() {
  const { id } = useParams();
  const blogId = Number(id);
  const blog = blogPosts.find((post) => post.id === blogId);

  function getRandomPosts(posts, count, excludeId) {
    const filteredPosts = posts.filter((post) => post.id !== excludeId);
    const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(blogPosts, 3, blogId);

  if (!blog) {
    return (
      <div className="text-center flex items-center justify-center min-h-[30rem] text-2xl font-medium bg-white text-black dark:text-white dark:bg-darkblack">
        Blog not found
      </div>
    );
  }

  return (
    <div className="relative pt-[7rem] bg-white dark:bg-darkblack max-w-screen">
      <div className="wrapper paddingtop space-y-10">
        <div className="space-y-5">
          <div className="bg-white/30 rounded-xl">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="aspect-video object-contain max-h-[70vh] mx-auto"
            />
          </div>
          <h1 data-aos="fade-up" className="main-title my-3">
            {blog.title}
          </h1>
          <hr />
          <p data-aos="fade-up" className="text-gray-600 dark:text-white">
            {blog.description}
          </p>
        </div>
        <hr className="border-white/50" />
        <div className="flex justify-center items-center flex-col">
          <h2 data-aos="fade-up" className="main-title my-3">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 dark:bg-darkblack">
            {randomPosts.map((post, index) => (
              <BlogBody key={index} {...post} passkey={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
