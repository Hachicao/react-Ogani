import React from "react";

interface BlogItemProps {
  imageUrl: string;
  date: string;
  comment: number;
  link: string;
  description: string;
}

export const BlogItems: React.FC<BlogItemProps> = ({
  imageUrl,
  date,
  comment,
  link,
  description,
}) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src={imageUrl} alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li>
                <i className="fa fa-calendar-o"></i> {date}
              </li>
              <li>
                <i className="fa fa-comment-o"></i> {comment}
              </li>
            </ul>
            <h5>
              <a href={link}>{description}</a>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
