import { NavLink } from "react-router"
export default function Coments() {
  return (
    <section className="comments-wrap mt-10">
    <div className="container mx-auto px-5 lg:px-60">
        <h3 className="font-heading text-4xl font-thin mb-5">Comments</h3>
        <div className="comment-list">

            <div className="lg:flex items-center ">
                <img src="images/reviewer-3.jpg" alt="default" className=" scale-50 " />
                <div className="author-post">
                    <div className="comment-meta flex items-center gap-3 mb-3">
                        <h5 className="font-heading text-xl">Michael Watson</h5>
                        <span className="meta-date">Dec 2,2024</span>
                        <small className="comments-reply"><NavLink to="#">↰ Reply</NavLink></small>
                    </div>
                    {/* <!--meta-tags--> */}

                    <p>Tristique tempis condimentum diam done ullancomroer sit element henddg sit he
                        consequert.Tristique tempis condimentum diam done ullancomroer sit element
                        henddg sit he consequert.</p>
                </div>

            </div>
            {/* <!--flex-container--> */}
            <div className="lg:flex items-center ">
                <img src="images/reviewer-4.jpg" alt="default" className="commentorImg scale-50 " />
                <div className="author-post">
                    <div className="comment-meta flex items-center gap-3 mb-3">
                        <h5 className="font-heading text-xl">Sara Keith</h5>
                        <span className="meta-date">Dec 2,2024</span>
                        <small className="comments-reply"><NavLink to="#">↰ Reply</NavLink></small>
                    </div>
                    {/* <!--meta-tags--> */}

                    <p>Tristique tempis condimentum diam done ullancomroer sit element henddg sit he
                        consequert.Tristique tempis condimentum diam done ullancomroer sit element
                        henddg sit he consequert.</p>
                </div>

            </div>
            {/* <!--flex-container--> */}


        </div>
        {/* <!--comment-list--> */}
    </div>
</section>
  )
}
