
import  Jarallax  from "../../lib/Jarallax";
import JarallaxImage from "../../lib/JarallaxImage";

export default function Hero() {
  return (
    <section id="hero" className="">

     <Jarallax speed={0.2}>
        <JarallaxImage src="images/hero-img.png" alt="" />
    <div className="py-80 xl:px-96 text-center">
      <h2 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-thin">About self love & Relationships</h2>
      <p className="text-xl sm-text-2xl lg:text-4xl xl:px-40 py-10 text-stone-700">Hi, I’m a Fitness enthusiast eager to
        share everything that i
        learned
        through
        my 5 year transformation </p>
    </div>
      </Jarallax>
  </section>
  )
}
