import {useEffect, useState} from 'react'; 

const useFetch = (url) => {

    const abortCont = new AbortController(); 

    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null) ; 

    useEffect(() => {
        fetch(url, { signal : abortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error('Error fetching data from the resource'); 
          }
          return res.json(); 
        })
        .then(data => {
          
          setData(data);
          setIsPending(false); 
          setError(null); 
        })
        .catch( err =>{

          if( err.name === 'AbortError')
          {
            console.log('fetch aborted'); 
          }
          else{ 
          setError(err.message); 
          setIsPending(false); 
          }

        }) ;

          return () => abortCont.abort(); 
      }, [url]);

      return { data, isPending, error} ;
}

export default useFetch;    