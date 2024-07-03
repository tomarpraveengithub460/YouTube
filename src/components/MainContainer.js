import React, { useEffect, useState } from 'react';
import HorizontalScroller from './HorizontalScroller';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleOn } from '../features/sidebar/Sidebar';

const MainContainer = () => {
    const apiKey = process.env.REACT_APP_YOUTUBE;
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);
    async function getVideos() {
        const videos = await fetch(YOUTUBE_VIDEOS_API + apiKey);
        const videosData = await videos.json();
        setVideos(videosData.items);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleOn());
    });

    const handleVideoClick = (video) => {
        sessionStorage.setItem('video', JSON.stringify(video));
    }


    return (
        <div className='mr-4 ml-6'>
            <div className='h-[68px] mb-3'>
                <div className='bg-white w-auto fixed z-10'><HorizontalScroller /></div>
            </div>

            <div className='grid grid-cols-3 items-center justify-center gap-y-3'>
                {videos.map((video, index) => (
                    // <Link to={path:{`/watch?v=${video.id}`},state:{channelId:video}}><VideoCard key={video.id} video={video} /></Link>
                    <Link
                        key={video.id}
                        to={{
                            pathname: `/watch`,
                            search: `?v=${video.id}`,
                        }}
                        onClick={()=>handleVideoClick(video)}
                    >
                        <VideoCard video={video} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainContainer;
