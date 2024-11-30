import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import BlogCards from "../components/home/BlogCards";
import FeaturedPosts from "../components/home/FeaturedPosts";
import BlogBlock from "../components/BlogBlock";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <BlogCards />
        <FeaturedPosts />
        <BlogBlock />
    </div>
  )
}
