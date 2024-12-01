import { Icon } from '@iconify/react';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <section id="footer" className="relative">

    <div className="pattern-overlay pattern-left absolute -z-10">
      <img src="images/leaf-img-pattern-left.png" alt="pattern" />
    </div>
    <div className="pattern-overlay pattern-right absolute bottom-0 right-0 -z-10">
      <img src="images/leaf-img-pattern-right.png" alt="pattern" />
    </div>

    <div className="container mx-auto footer-container py-40 px-5 lg:px-0">
      <footer className="grid grid-cols-2 lg:grid-cols-6 gap-6 pb-20">

        <div className="">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Twitter</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Facebook</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Instagram</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Linkedin</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Youtube</NavLink></li>
          </ul>
        </div>

        <div className="">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">About</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Contact</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Blog</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Policy</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Terms</NavLink></li>
          </ul>
        </div>

        <div className="">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Spirituality</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Life</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Relationships</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Travel</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Health</NavLink></li>
          </ul>
        </div>

        <div className="">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Yoga</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Gardening</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Love</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Books</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="#" className="uppercase hover:text-gray-500">Meditation</NavLink></li>
          </ul>
        </div>

        <div className="grid grid-cols-subgrid col-span-2 ">
          <div className="col-span-2 lg:text-right">
            <p className="m-0"> <b>info@yourcompany.com</b> </p>
            <p className="m-0">15Th Street Avenue, New York, USA</p>
            <p className="m-0">011-554-8798-6556</p>

            <div className=" mt-3 flex lg:justify-end">
              <NavLink 
                  to="https://www.facebook.com/sharer/sharer.php?u=https://blog-posts-rouge.vercel.app/" 
              className="social-link text-xl hover:text-gray-500 me-4" target="_blank"><Icon
                  className="social-icon" icon="mdi:facebook" /></NavLink>
              <NavLink 
              
              to="https://www.instagram.com/blog_post/"
               className="social-link text-xl hover:text-gray-500 me-4" target="_blank"><Icon
                  className="social-icon" icon="mdi:instagram" /></NavLink>
              <NavLink 
                 to="https://twitter.com/intent/tweet?url=https://blog_post.com&text=Check%20this%20out!"
              className="social-link text-xl hover:text-gray-500 me-4" target="_blank"><Icon
                  className="social-icon" icon="mdi:twitter" /></NavLink>
              <NavLink 
                 to="https://www.linkedin.com/sharing/share-offsite/?url=https://blog_post.com"
              className="social-link text-xl hover:text-gray-500 me-4" target="_blank"><Icon
                  className="social-icon" icon="mdi:linkedin" /></NavLink>
              <NavLink 
                  to="https://www.youtube.com/c/blog_post"
               className="social-link text-xl hover:text-gray-500 me-4" target="_blank"><Icon
                  className="social-icon" icon="mdi:youtube" /></NavLink>
            </div>
          </div>
        </div>

      </footer>

      <footer className="border-t ">
        <div className="flex justify-center pt-10">
          <p className="mb-0">© 2024 BlogPosts. All rights reserved.</p>
        </div>
      </footer>

    </div>

  </section>
  )
}
