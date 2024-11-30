import PropTypes from "prop-types";
export default function JarallaxImage({ className = '', ...props }) {
    return <img className={`jarallax-img ${className}`} {...props} />;
  }
  
JarallaxImage.propTypes={
 className:PropTypes.string
}