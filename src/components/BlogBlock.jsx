import BlogBlockCard from "./BlogBlockCard"
import SwipeComponent from "./SwipeComponent"

const blogPosts=[{
    key: 1,
    title: "5 Helpful Tips for Living Healthy Life",
    imgUrl:"images/blog7.png"
},
{
    key: 2,
    title: "5 Helpful Tips for Living Healthy Life",
    imgUrl:"images/blog8.png"
},
{
    key: 3,
    title: "5 Helpful Tips for Living Healthy Life",
    imgUrl:"images/blog9.png"
},
{
    key: 4,
    title: "5 Helpful Tips for Living Healthy Life",
    imgUrl:"images/blog10.png"
},
{
    key: 5,
    title: "5 Helpful Tips for Living Healthy Life",
    imgUrl:"images/blog11.png"
}
]
export default function BlogBlock() {
  return (
    <section id="blog-block">
    <div className=" mt-24">
        <SwipeComponent>
        {
            blogPosts.map(post => <BlogBlockCard key={post.key} title={post.title} imgUrl={post.imgUrl} />)
        }
        </SwipeComponent>
    </div>
  </section>
  )
}
