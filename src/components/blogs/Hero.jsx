import { NavLink } from "react-router"

export default function Hero() {
  return (
    <section id="hero">
    <div className="py-60 xl:px-96 text-center">
        <h2 className="font-heading text-5xl sm:text-4xl lg:text-6xl font-thin">Blog</h2>
        <p className=" xl:px-40 pt-5 text-stone-700"><span className="blog-date text-uppercase"><NavLink to="/" 
           
        className="">Home</NavLink></span> &nbsp; / &nbsp;
            <span className="item">Blog</span>
        </p>
    </div>
</section>
  )
}
