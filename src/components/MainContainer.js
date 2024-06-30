import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    return (
        <div className='main-container grid grid-flow-col bg-pink-500'>
            <div className='grid col-span-full'><ButtonList /></div>
            <div><VideoContainer /></div>
        </div>
    )
}
export default MainContainer;

