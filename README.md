# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


CSS- Queries 
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(247, 230, 230, 0.87);
  background-color: #0f0e0e;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*------------------------- written CSS for root ID---------------------------------- */
#root{
  min-height: 100vh;
  display: flex;
  margin: 0;
}
/*---------------------------- written CSS for all----------------------------------- */
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/*-------------------------------- CSS for image to be shown------------------------ */
.bgimage {
  flex: 1;
  display: flex;
  width: 100%; 
  height: 100%; 
  position: fixed;
}

.bgimage img {
  width: 100%; 
  height: auto; 
  max-height: 100%; 
  
  object-fit: cover; 
  
}



/*----------------------------- CSS for Footer-------------------------------------------- */

/* CSS for footer class parent Div */
.footer{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}

/* CSS for bgfooter class child of footer class div */
.bgfooter{
  position: absolute;
  z-index:-1;
  inset: 0;
  background: linear-gradient(to top, #000000)
}

/* Css for footer Content child of footer class Div */

.footerContent{
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

/* CSS for info button child of footer class Div */
.infobtn{
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
}

.footerContent h1{
  font-weight: 100;
}
.footerContent h2{
  font-weight: 200;
  font-size: 3rem;
}

/* --------------------------------CSS for Sidebar------------------------------ */
/* CSS for Sidebar parent div  */
.sidebar{
  display: flex;
  position: fixed;
  top:0;
  overflow-y: scroll;
  z-index: 5;
  right: 0;
  width:30%;
  height: 100%;
}

/* CSS for Sidebar Background */
.bgSidebar{
  position: absolute;
  z-index:-4;
  inset: 0;
  background-color: #000000;
}
.sidebarContent{
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2;
  flex: 1;
  
  font-size: 1.5rem;
  /* gap: 4; */
  justify-content: space-between;
}
.closebtn{
  display: flex;
  position: fixed;
  bottom: 0;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  background-color: #000000;
  color: white;
  border: none;
  padding:1em;
  margin-bottom: 2rem;
  transition: 2000;
  cursor: pointer;
}
.closebtn:hover{
  font-size: 2rem;
  opacity: 1;

}

#discriptionPara{
  font-size: 1rem;
}

@media screen and (min-width:300px) and (max-width:600px) {
  .sidebar{
    display: flex;
    position: fixed;
    top:0;
    overflow-y: scroll;
    z-index: 5;
    right: 0;
    width:70%;
    height: 100%;
  }
  
}