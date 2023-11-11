import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState(
      [
        {
          title: 'Blog 1', 
          publication: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatum! Omnis voluptatum, laborum blanditiis in numquam ullam libero cupiditate, soluta laudantium animi commodi natus illum impedit eos beatae dignissimos ab.', 
          author: 'Siddharth', 
          id: 1
        }, 
        {
          title: 'Blog 2', 
          publication: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam tenetur est sapiente ut neque? Magni perspiciatis recusandae fugit ut veniam laboriosam, impedit iure? Et perspiciatis suscipit aliquam aliquid ex omnis delectus doloribus magnam quia. Laborum iure cum placeat ipsum!', 
          author: 'Daju', 
          id: 2 
        }, 
        { 
          title: 'Blog 3', 
          publication: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestiae consequuntur error numquam libero corrupti aperiam accusantium ratione. Similique reiciendis vitae dolore, iste eveniet aperiam, voluptatibus repellendus debitis quos ad aliquid, sunt vel error repudiandae.', 
          author: 'Ludwig Van Beethoven', 
          id: 3
        }
      ]
    ); 

    return (
      <div className="home">
        {blogs.map((blog) => (
           <div className="blog-preview" key={blog.id}>
             <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
           </div>
        ) )}
      </div>
    );
  }
   
  export default Home;