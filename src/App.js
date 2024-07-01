import React from 'react';
import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Sidebar from './components/Sidebar';
function App() {
  const [showSidebar,setShowSidebar]=useState(true);
    function handleHamburgerClick(){
        setShowSidebar(!showSidebar);
    }
    console.log(showSidebar);
  return (
    <div className='App'>
      <Head  setShowSidebar={handleHamburgerClick}/>
      <Body showSidebar={showSidebar} />
    </div>
  );
}

export default App;
