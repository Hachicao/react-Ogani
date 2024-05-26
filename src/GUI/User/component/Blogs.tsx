import React from "react";
import { BlogItems } from "./BlogItems";

export const Blogs = () => {
  const blogs = [
    {
      imageUrl: "assest/img/blog/blog-1.jpg",
      date: "May 4,2019",
      comment: 5,
      title: "Cooking tips make cooking simple",
      content:
        "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    },
    {
      imageUrl: "assest/img/blog/blog-2.jpg",
      date: "May 4,2019",
      comment: 5,
      title: "6 ways to prepare breakfast for 30",
      content:
        "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    },
    {
      imageUrl: "assest/img/blog/blog-3.jpg",
      date: "May 4,2019",
      comment: 5,
      title: "Visit the clean farm in the US",
      content:
        "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    },
  ];
  return (
    <>
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((blog, index) => (
              <BlogItems
                key={index}
                imageUrl={blog.imageUrl}
                date={blog.date}
                comment={blog.comment}
                link={blog.title}
                description={blog.content}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
