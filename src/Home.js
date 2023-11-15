import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () => {

    const { data, isPending, error} = useFetch('http://localhost:8000/blogs'); 

    return (
      <div className="home">
        <div>{error && <div>{error}</div>}</div>
        {isPending && <h3>Loading data...</h3>}
        {data &&<BlogList blogs={data} title='All Blogs' />}
      </div>
    );
  }
   
  export default Home;