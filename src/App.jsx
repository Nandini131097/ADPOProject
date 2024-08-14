import React, { useEffect, useState } from 'react'
import Maincontent from './components/maincontent'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import {fetchApi} from './index'

function App() {

  const[sidebarMove,setSidebarMove]=useState(false);
  const[mydata,setdata]=useState(null);
  
  const handleSidebarMode=()=>{
    setSidebarMove(!sidebarMove);
  } 
  // useEffect(()=>{
  //     const fetchApi=async()=>{
  //       let apilink= `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=7923b2bae42d44acbbf75bd3103ddad7`;
  //       const result = await fetch(apilink);
  //       const parsedata= await result.json();
  //       setdata(parsedata);
  //     }
  //   fetchApi();
  // }
  
  // ,[])
  useEffect(() => {
    fetchApi()
      .then(result => {
        setdata(result)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    {mydata? (<Maincontent url={mydata.url}/>): <h2>No content found</h2>}
    {mydata?(sidebarMove && (
          <Sidebar
          title={mydata.title}
            explanation={mydata.explanation}
            mydata={mydata}
            handleSidebarMode={handleSidebarMode}
          />
        )
      ):<h2>no data found</h2>}
    {mydata? (<Footer title={mydata.title} handleSidebarMode={handleSidebarMode} />):<p>no data found</p>}
  </>
  )
}

export default App
