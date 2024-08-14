import React from 'react'

export default function Sidebar(props) {
  const{handleSidebarMode}=props;
  return (
    <div className='sidebar'>
      <div className='bgSidebar'></div>
    <div className='sidebarContent'>
      <h1>{props.title}</h1>
      <h3>Discription</h3>
      <p id='discriptionPara'>{props.explanation}
      </p>
      <button onClick={handleSidebarMode} className='closebtn'>
      <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
    </div>
  )
}
