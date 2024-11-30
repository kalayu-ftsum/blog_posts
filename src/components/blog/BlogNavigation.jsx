import { NavLink } from "react-router"


export default function BlogNavigation() {
  return (
    <section id="blog-navigation">
    <div className="container mx-auto flex justify-between my-20 px-5 lg:px-0">
        <div className="">
            <NavLink to="#"><span className="blog-date text-uppercase">Previous</span></NavLink>
            <h3 className="blog-nav-heading font-bold text-base lg:text-2xl py-3 "><NavLink to="#" className="hover:text-gray-500">How &apos;Weak
                    Ties&apos; Can be Strength to
                    Relationships</NavLink></h3>
        </div>

        <div className="text-end">
            <NavLink to="#"><span className="blog-date text-uppercase">Next</span></NavLink>
            <h3 className="blog-nav-heading font-bold text-base lg:text-2xl py-3 "><NavLink to="#" className="hover:text-gray-500">What It&apos;s
                    Really Like to Date While
                    Fat</NavLink></h3>
        </div>
    </div>
</section>
  )
}
