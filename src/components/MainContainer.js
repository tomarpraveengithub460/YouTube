import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import HorizontalScroller from './ButtonList';

const MainContainer = () => {
    return (
        <div className='main-container pt-1 mr-10'>
            <div className=''><HorizontalScroller /></div>
            <div><VideoContainer /></div>
        </div>
    )
}
export default MainContainer;

