import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import BlogCards from "../components/home/BlogCards";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <BlogCards />
    </div>
  )
}
