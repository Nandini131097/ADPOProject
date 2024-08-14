

export const fetchApi=async()=>{
   const urlAPI= import.meta.env.REACT_APP_API_URL;
   const result= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${urlAPI}`,{method:'GET'});
   return  await result.json();
}