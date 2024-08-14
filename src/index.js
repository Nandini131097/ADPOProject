


export const fetchApi=async()=>{
   const result= await fetch('https://api.nasa.gov/planetary/apod?api_key=mVSWbvNfVghXQXcWc4LzgxbPuzgHZYmQ46vqkiam',{method:'GET'});
   return  await result.json();
}