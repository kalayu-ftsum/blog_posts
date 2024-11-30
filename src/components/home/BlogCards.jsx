import BlogCard from "./BlogCard";

const blogs=[{
    id:1,
    title:"I am alone, and feel the charm of existence created for the bliss",
    imgUrl:'images/blog6.png',
    date:"12th Jan 2023",
    description:"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing since"
},
{
    id:2,
    title:"I am alone, and feel the charm of existence created for the bliss",
    imgUrl:'images/blog5.png',
    date:"12th Jan 2023",
    description:"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing since"
}
,
{
    id:3,
    title:"I am alone, and feel the charm of existence created for the bliss",
    imgUrl:'images/blog4.png',
    date:"12th Jan 2023",
    description:"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing since"
},
{
    id:4,
    title:"I am alone, and feel the charm of existence created for the bliss",
    imgUrl:'images/blog3.png',
    date:"12th Jan 2023",
    description:"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing since"
},
{
    id:5,
    title:"I am alone, and feel the charm of existence created for the bliss",
    imgUrl:'images/blog2.png',
    date:"12th Jan 2023",
    description:"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing since"
}
,
{
    id:6,
    title:"I am alone, and feel the charm of existence created for the bliss",
    imgUrl:'images/blog1.png',
    date:"12th Jan 2023",
    description:"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing since"
}
]

export default function BlogCards() {
  return (
    <section id="blog-card">
    <div className="container mx-auto py-28">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-7 px-5 lg:px-0">
        {blogs.map((blog) => (<BlogCard 
         key={blog.id}
         {...blog}
        />
        ))
        }

      </div>
    </div>
  </section>
  )
}
