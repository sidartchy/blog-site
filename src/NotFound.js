import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <p>Error</p>
            <p>404 Page not found...</p>
            <Link to="/">Redirect to HomePage</Link>
        </div>
     );
}
 
export default Notfound;