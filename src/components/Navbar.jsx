import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      setIsScrolled(scrollTop >= 200);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed navbar w-full z-10 ${isScrolled ? "bg-white" : ""}`}>
      <div className=" py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <NavLink to="/" onClick={closeModal}
                className="font-heading uppercase font-bold text-base text-black hover:text-gray-500 py-2 px-10"
              >
               BlogPosts
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ">
       
              <NavLink
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 px-10"
                to="/"
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 pe-5"
              >
                About
              </NavLink>
              <NavLink
                to="/blogs"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 px-5"
              >
                Blog
              </NavLink>
              <NavLink
                to="/gallery"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 ps-5"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/faq"
                className="font-heading uppercase text-base text-black hover:text-gray-500 py-2 ps-5"
              >
                FAQ
              </NavLink>
              <button className="bg-primary hover:bg-[#cdd3a3] w-32 ml-8 rounded-md text-white uppercase p-3" type="button">
              <NavLink
                to="/contact"
              >
                Contact us
              </NavLink>
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden mobile-menu-button">
      
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative inline-flex items-center justify-center rounded-md  p-2 text-black hover:bg-slate-700 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="open-icon block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="close-icon h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

  
      <div
        className={`md:hidden ${isOpen ? "visible" : "hidden"} bg-white text-center`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 h-screen sm:px-3">
         <NavLink
            to="/"
            onClick={closeModal}
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeModal}
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={closeModal}
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            Blog
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={closeModal}
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            Gallery
          </NavLink>
          <NavLink
            to="/faq"
            onClick={closeModal}
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            FAQ
          </NavLink>
          <button className="bg-primary hover:bg-[#cdd3a3] w-1/2 rounded-md text-white uppercase p-3" type="button">
          <NavLink
            to="/contact"
            onClick={closeModal}
            className="font-heading block uppercase text-base text-black hover:text-gray-500 p-2 "
          >
            Contact us
          </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}
