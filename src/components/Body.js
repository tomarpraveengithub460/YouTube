import React from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const apiKey=process.env.REACT_APP_YOUTUBE;
console.log("This is api "+apiKey);

const Body = (props) => {
    const value=useSelector((state)=>state.toggleSideBar.showSideBar);
    return (
        <div className='main-body grid grid-flow-col grid-cols-12'>
            {value?null:<div className='col-span-2'><Sidebar /></div>}
            <div className='col-span-12'><Outlet /></div>
        </div>
    )
}
export default Body;