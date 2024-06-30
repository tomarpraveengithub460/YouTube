import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
    return (
        <div className='main-body grid grid-flow-col bg-yellow-400'>
            <div className='col-span-0'><Sidebar /></div>
            <div className=''><MainContainer /></div>
        </div>
    )
}
export default Body;