import PropTypes from 'prop-types';

import { NavLink } from "react-router"

export default function BlogBlockCard({
    imgUrl,
   title

}) {
 
  return (
    <figure className="blog-block-content image-zoom relative max-[600px]:w-5/6 max-[600px]:mx-auto">
        <NavLink to="/blog" 
          
        className=" ">
          <img className="blog-block-img " src={imgUrl} alt="" />
          <div className="header-overlay hidden lg:flex absolute inset-x-0 bottom-0 justify-center">
            <h5 className="font-heading text-white text-xl p-12">{title}</h5>
          </div>
        </NavLink>
      </figure>
  )
}

BlogBlockCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}