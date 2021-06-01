import React from "react";
import "./post.css";

const BlogList = ({ list }) => {
  return (
    <div className="blog-list">
      <div className="container">
        <div className="grid">
          {list &&
            list.posts &&
            Object.keys(list.posts).map((issue, i) => (
              <div key={i}>
                <img
                  src={list.posts[issue].thumbnail_image}
                  alt=""
                  className="imgWidth"
                />

                {/* {list.posts[issue].likes &&  list.posts[issue].views} */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
