import React from "react";
import './Blog.css'
function Blog() {
  return (
    <div className="blogdiv"
      style={{
        backgroundImage: ' url("https://wallpapercave.com/wp/wp5942140.jpg")',
        backgroundSize: "cover",
        color: "white",
        width: "-webkit-fill-available",
      }}
    >
      <h1>Blog</h1>
    </div>
  );
}

export default Blog;
