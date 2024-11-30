import  { useCallback, useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import LightComponent from '../LightComponent'

const categories=[{
    id:1,
    value:'*',
    name:'All'
},
{
    id:2,
    value:'.life',
    name:'Life'
},
{
    id:3,
    value:'.travel',
    name:'Travel'
},
{
    id:4,
    value:'.love',
    name:'Love'
},
{
    id:5,
    value:'.health',
    name:'Health'
},
]

export default function OurGallery() {

    const isotopeContainer = useRef(null);
    const [isotope, setIsotope] = useState(null);
    const [activeFilter, setActiveFilter] = useState('*');
    const configIsotope=useCallback(()=>{
        const iso = new Isotope(isotopeContainer.current, {
            itemSelector: '.item',
            layoutMode: 'masonry',
          });
          setIsotope(iso);
    },[isotopeContainer])
  
    useEffect(() => {
        if(!isotopeContainer) return
      // Initialize Isotope
     
      configIsotope()
      window.onload=configIsotope;
      // Cleanup Isotope on component unmount
      return () => {if(isotope) {
        isotope.destroy()
    }};
    }, [isotopeContainer]);
  
    const handleFilterChange = (filterValue) => {
        if (isotope) {
            console.log({filterValue})
            isotope.arrange({ filter: filterValue === '*' ? '*' : filterValue });
            setActiveFilter(filterValue);
        }
    };
  return (
    <section id="gallery">

    <div className="container mx-auto px-5 lg:px-0 ">
        <h2 className=" font-heading text-4xl font-thin mb-7">Our Gallery</h2>

        <div className="py-5 lg:pt-0">
            {
                categories.map(category => <button 
                    key={category.id}
                    onClick={()=>handleFilterChange(category.value)}
                    className={`filter-button font-heading text-sm rounded-full hover:bg-primary hover:text-white px-4 py-2 mt-3 mr-3 lg:mt-0 ${category.value==activeFilter?'active':''} uppercase`} data-filter={`${category.value}`}>{category.name}</button>
                )
            }
        </div>
 <div className="min-h-[500px]">

            <LightComponent>
        <div className="isotope-container relative "  ref={isotopeContainer}>

            <div className=" grid grid-cols-4 gap-4">
                <div className="item life absolute top-0 left-0">
                    <a href="images/blog7.png" title="Life" className="image-link"><img src="images/blog7.png" className=" post-image object-contain" /></a>
                </div>
                <div className="item health " >
                    <a href="images/blog8.png" title="Life" className="image-link"><img src="images/blog8.png" className=" post-image object-contain" /></a>
                </div>
                <div className="item love " >
                    <a href="images/blog9.png" title="Life" className="image-link"><img src="images/blog9.png" className=" post-image object-contain" /></a>
                </div>
                <div className="item life " >
                    <a href="images/blog10.png" title="Life" className="image-link"><img src="images/blog10.png" className=" post-image object-contain" /></a>
                </div>
                <div className="item love " >
                    <a href="images/blog11.png" title="Life" className="image-link"><img src="images/blog11.png" className=" post-image object-contain" /></a>
                </div>
                <div className="item health " >
                    <a href="images/blog8.png" title="Life" className="image-link"><img src="images/blog8.png" className=" post-image object-contain" /></a>
                </div>

                <div className="item life " >
                    <a href="images/blog11.png" title="Life" className="image-link"><img src="images/blog11.png" className=" post-image object-contain" /></a>
                </div>
                <div className="item travel " >
                    <a href="images/blog7.png" title="Life" className="image-link"><img src="images/blog7.png" className=" post-image object-contain" /></a>
                </div>




            </div>
        </div>
            </LightComponent>
 </div>

</div></section>
  )
}
