import { useEffect, useState } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null) ; 

    useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok){
          throw Error('Error fetching data from the resource'); 
        }
        return res.json(); 
      })
      .then(data => {
        
        setBlogs(data);
        setIsPending(false); 
        setError(null); 
      })
      .catch( err =>{
        setError(err.message); 
        setIsPending(false); 
      })
    });
    

    return (
      <div className="home">
        <div>{error && <div>{error}</div>}</div>
        {isPending && <h3>Loading data...</h3>}
        {blogs &&<BlogList blogs={blogs} title='All Blogs' />}
      </div>
    );
  }
   
  export default Home;