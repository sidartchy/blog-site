import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const Create = () => {

    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); 
    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate() ; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const blog = {title, body, author}; 

        setIsPending(true); 
        
        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("New Blog Added"); 
            setIsPending(false); 
            navigate('/'); 
        })

    }


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}

                />
                <label>Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}

                >
                </textarea>
                <label>Author</label>
                <input 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}

                />
                { !isPending && <button>Submit</button>}
                { isPending && <button disabled>Submitting</button>}
            </form>

        </div>
     );
}
 
export default Create;