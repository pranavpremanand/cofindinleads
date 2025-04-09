import React from "react";
import { useNavigate } from "react-router-dom";

function BlogBody({ imageUrl, title, subdescription, id, passkey }) {
  const navigate = useNavigate();
  const blogPageChange = ({ id }) => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <article
        data-aos="fade-up"
        className={`dark:border cursor-pointer dark:border-gray-700 rounded-xl overflow-hidden dark:shadow-md dark:bg-darkblack flex  items-center flex-col ${
          passkey ? "" : "w-full"
        }`}
        onClick={() =>
          blogPageChange({
            id,
          })
        }
      >
        <div className="rounded-xl overflow-hidden px-4 object-cover w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[211px] object-cover rounded-xl  mt-3"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-700 mb-3 dark:text-white line-clamp-2">
            {subdescription}
          </p>
        </div>
      </article>
    </>
  );
}

export default BlogBody;
