import React from 'react';
import Head from './Head';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';

const Body=()=>{
    return (
        <div>
            <Head />
            <MainContainer />
            <Sidebar />
            <VideoContainer />
        </div>
    )
}
export default Body;