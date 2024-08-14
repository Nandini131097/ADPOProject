import React, { useEffect, useState } from 'react'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import {fetchApi} from './index'
import Imagebar from './components/Imagebar'


function App() {

  const[sidebarMove,setSidebarMove]=useState(false);
  const[mydata,setdata]=useState(null);
  
  const handleSidebarMode=()=>{
    setSidebarMove(!sidebarMove);
  } 
 
  useEffect(() => {
    fetchApi()
      .then(result => {
        setdata(result)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    {mydata? (<Imagebar url={mydata.url}/>): <h2>No content found</h2>}
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
