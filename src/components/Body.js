import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = (props) => {
    const {showSidebar}=props;
    console.log("This is : ",showSidebar);
    return (
        <div className='main-body grid grid-flow-col grid-cols-12'>
            {showSidebar?<div className='' ><Sidebar showSidebar={showSidebar} /></div>:<div className='col-span-2' ><Sidebar showSidebar={showSidebar} /></div>}
            <div className='col-span-12'><MainContainer /></div>
        </div>
    )
}
export default Body;