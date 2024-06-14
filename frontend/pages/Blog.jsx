import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/header";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs/");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading blogs: {error.message}</p>;
  }

  return (
    <div>
      <Header/>
      {blogs.length < 1 ? (
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <h1>
              <b>OPPS!</b> We Could not Find The Blogs
            </h1>
            <p>Uh... So it looks like there are not any blogs available yet.</p>
            <h2>
              <Link href="/">
                <a>Bring me back Home</a>
              </Link>
            </h2>
          </center>
        </div>
      ) : (
        <div>
          {/* ##### Breadcumb Area Start ##### */}
          <div className="breadcumb_area breadcumb-style-two bg-img">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="page-title text-center">
                    <h2>Welcome to our Blogging Page</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ##### Breadcumb Area End ##### */}

          {/* ##### Blog Wrapper Area Start ##### */}
          <div className="blog-wrapper section-padding-80">
            <div className="container">
              <div className="row">
                {blogs.map((b) => (
                  <div key={b.blog_id} className="col-12 col-lg-6">
                    <div className="single-blog-area mb-50">
                      <Image
                        src={b.image}
                        alt={b.title}
                        width={100}
                        height={100}
                      />
                      <div className="post-title">{b.title}</div>
                      <div className="hover-content">
                        <div className="hover-post-title"></div>
                        <p>{b.short_description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ##### Blog Wrapper Area End ##### */}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
