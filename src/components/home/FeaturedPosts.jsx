import  { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { NavLink } from 'react-router';

const categories=[{
    id:1,
    value:'*',
    name:'All'
},
{
    id:2,
    value:'.love',
    name:'love'
},
{
    id:3,
    value:'.yoga',
    name:'yoga'
},
{
    id:4,
    value:'.recipes',
    name:'recipes'
},
{
    id:5,
    value:'.naturalherbs',
    name:'natural herbs'
},
]

export default function FeaturedPosts() {
  

    const isotopeContainer = useRef(null);
    const [isotope, setIsotope] = useState(null);
    const [activeFilter, setActiveFilter] = useState('*');
  
    useEffect(() => {
        if(!isotopeContainer) return
      // Initialize Isotope
      const iso = new Isotope(isotopeContainer.current, {
        itemSelector: '.item',
        layoutMode: 'masonry',
      });
      setIsotope(iso);
  
      // Cleanup Isotope on component unmount
      return () => iso.destroy();
    }, [isotopeContainer]);
  
    const handleFilterChange = (filterValue) => {
      setActiveFilter(filterValue);
      if (isotope) {
        isotope.arrange({ filter: filterValue === '*' ? '*' : filterValue });
      }
    };
  return (
    <section id="featured">
    <div className=" container mx-auto lg:flex justify-between align-middle px-5 lg:px-0">
      <h2 className="font-heading text-4xl ">Featured Posts</h2>
      <div className="pt-5 lg:pt-0">
        {
            categories.map((category) => (<button
                onClick={()=>handleFilterChange(category.value)}
                key={category.id}
                className={`filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 lg:mt-0 ${activeFilter==category.value?"active":""} uppercase`}
                data-filter={category.value}>{category.name}</button>

            ))
        }

      </div>
    </div>

    <div className="container mx-auto px-5 lg:px-0">
      <div className="isotope-container mt-12" ref={isotopeContainer}>

        <div className="grid grid-cols-2 gap-4">
          <div className="item love lg:me-28">
            <div className="featured-post py-2">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500 "><NavLink to="/blog"
               
                  className="blog-link capitalize">How &apos;Weak
                  Ties&apos; Can Strengthen Our
                  Relationships</NavLink></h3>
            </div>
            <hr className="my-4" />
          </div>
          <div className="item love lg:me-28">
            <div className="featured-post py-2 ">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink
              to="/blog"
            
                  className="blog-link capitalize">How &apos;Weak
                  Ties&apos; Can Strengthen Our
                  Relationships</NavLink></h3>
            </div>
            <hr className="my-4 " />
          </div>
          <div className="item yoga lg:me-28">
            <div className="featured-post py-2">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink to="/blog"
               
                  className="blog-link capitalize">What It&apos;s
                  Really Like to Date While
                  Anxious </NavLink></h3>
            </div>
            <hr className="my-4" />
          </div>
          <div className="item yoga lg:me-28">
            <div className="featured-post py-2 ">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink to="/blog"
                 
                  className="blog-link capitalize">What It&apos;s
                  Really Like to Date While
                  Anxious </NavLink></h3>
            </div>
            <hr className="my-4 " />
          </div>
          <div className="item recipes lg:me-28">
            <div className="featured-post py-2">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink to="/blog"

                  className="blog-link capitalize">Benefits
                  to Having Much Older
                  Friends than you</NavLink></h3>
            </div>
            <hr className="my-4" />
          </div>
          <div className="item recipes lg:me-28">
            <div className="featured-post py-2 ">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink to="/blog"
                
                  className="blog-link capitalize">Benefits
                  to Having Much Older
                  Friends than you</NavLink></h3>
            </div>
            <hr className="my-4 " />
          </div>
          <div className="item naturalherbs lg:me-28">
            <div className="featured-post py-2">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink to="/blog"
                 
                  className="blog-link capitalize">How Often
                  You Should Wash Your
                  Hair in winter</NavLink></h3>
            </div>
            <hr className="my-4 " />
          </div>
          <div className="item naturalherbs lg:me-28">
            <div className="featured-post py-2 ">
              <span className="blog-date uppercase">dating and Relationships</span>
              <h3 className="font-heading text-2xl font-normal hover:text-gray-500"><NavLink to="/blog"
                  className="blog-link capitalize">How Often
                  You Should Wash Your
                  Hair in winter</NavLink></h3>
            </div>
            <hr className="my-4 " />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}
