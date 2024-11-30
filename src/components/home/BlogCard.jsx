import PropTypes from 'prop-types';

import {NavLink } from "react-router";

export default function BlogCard({
    imgUrl,
    title,
    date,
    description
}) {
  return (
    <div className="blog-post py-10">

    <div className="image-zoom">
      <NavLink 
      to="/blog"
      className="blog-img"><img src={`${imgUrl}`} alt="" className="img-fluid" /></NavLink>
    </div>
    <div className="pt-8">
      <span className="blog-date uppercase">in <b>Travel Tips</b> on {date}</span>
    </div>
    <div className="">
      <h3 className="py-5"><NavLink to="/blog" className="font-heading font-thin text-2xl hover:text-gray-500">{title}
         </NavLink></h3>
      <p className="pb-10">{description}
      </p>
      <NavLink 
      to="/blog"
           
        className="font-heading text-sm font-normal py-4 px-8 bg-transparent hover:bg-black text-black hover:text-white border-black border-2 hover:border-transparent rounded-full transition duration-700 ease-in-out">
        Read More
      </NavLink>
    </div>

  </div>
  )
}


BlogCard.propTypes={
  imgUrl:PropTypes.string,
  title:PropTypes.string,
  date:PropTypes.string,
  description:PropTypes.string
}