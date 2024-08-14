import React from 'react'

export default function Footer(props) {
  const{handleSidebarMode}=props;
  return (
    <div className='footer'>
      <div className='bgfooter'></div>

    <footer className="footerContent">
      <h1>{props.title}</h1>
      <h2>ADPO Project</h2>
    </footer>
    <button onClick={handleSidebarMode} className='infobtn'><i className="fa-solid fa-circle-info"></i>
    </button>
    </div>
  )
}
