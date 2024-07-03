import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleOff } from '../features/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

const YouTubeWatchPage = () => {

  const apiKey=process.env.REACT_APP_YOUTUBE;
  const dispatch = useDispatch();
  const [videoInfo,setVideoInfo]=useState({});
  const [channelInfo,setChannelInfo]=useState({});

  const [searchParams] = useSearchParams();

  const videoId=searchParams.get("v");
  useEffect(()=>{
    dispatch(toggleOff());
    const videoInformation=sessionStorage.getItem('video');
    const  videoFullInfo = JSON.parse(videoInformation);
    if(videoInformation){
      setVideoInfo(videoFullInfo);
    }
    getChannelDetails(videoFullInfo.snippet.channelId);
  },[]);


  // console.log("This is Param:", searchParams.get("v"));

  
  // useEffect(() => {
    
  //   // getVideoDetails();
  //   // getChannelDetails(videoInfo?.snippet?.channelId);
  // },[]);

  // async function getVideoDetails(){
  //   const video=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=${apiKey}`);
  //   const videoData=await video.json();
  //   console.log(videoData?.items[0]);
  //   setVideoInfo(videoData?.items[0]);
  // }

  async function getChannelDetails(cid){
    const channel=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${cid}&key=${apiKey}`);
    const channelData=await channel.json();
    console.log("Channel data is :",channelData.items[0]);
    setChannelInfo(channelData.items[0]);
  }
  
  const calculateTimeSincePublished = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    const differenceInMs = currentDate - publishedDate;

    const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    return 'Just now';
  };
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center p-4 bg-gray-100 min-h-screen">
      <div className="lg:w-2/3 w-full bg-white shadow-md p-4">
        <div className="aspect-w-16 aspect-h-9 bg-white-300">
          <iframe width="888" height="470"  className='rounded-xl'
          src={"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
          </iframe>
        </div>
        <h1 className="text-xl font-bold mt-4">{videoInfo?.snippet?.localized?.title}</h1>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-600">{videoInfo?.statistics?.viewCount} views • {calculateTimeSincePublished(videoInfo?.snippet?.publishedAt)}</div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1">
              <span className="material-icons text-lg"><FontAwesomeIcon icon={faThumbsUp} /></span>
              <span>{videoInfo?.statistics?.likeCount}</span>
            </button>
            <button className="flex items-center space-x-1">
              <span className="material-icons text-lg"><FontAwesomeIcon icon={faThumbsDown} /></span>
              <span>0K</span>
            </button>
            <button className="flex items-center space-x-1">
              <span className="material-icons text-lg"><FontAwesomeIcon icon={faShare} /></span>
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1">
              <span className="material-icons text-lg"><FontAwesomeIcon icon={faDownload} /></span>
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-1">
              <span className="material-icons text-lg"><FontAwesomeIcon icon={faEllipsis} /></span>
            </button>
          </div>
        </div>
        <div className="flex items-center mt-4 border-t border-b py-4">
          <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/48" alt="Channel" />
          <div className="flex-grow">
            <div className="text-lg font-bold">{channelInfo?.snippet?.localized?.title}</div>
            <div className="text-gray-600">{channelInfo?.statistics?.subscriberCount} subscribers</div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Subscribe</button>
        </div>
        {/* <div className="mt-4">
          <h2 className="font-bold">Comments</h2>
          <div className="mt-2 space-y-4">
            {Array(5).fill().map((_, index) => (
              <div key={index} className="flex space-x-4">
                <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User" />
                <div>
                  <div className="font-bold">Fake User {index + 1}</div>
                  <div className="text-gray-600">This is a fake comment for the sake of example.</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div className="lg:w-1/3 w-full lg:ml-4 mt-4 lg:mt-0">
        {/* <h2 className="font-bold mb-2">Related Videos</h2>
        <div className="space-y-4">
          {Array(5).fill().map((_, index) => (
            <div key={index} className="flex space-x-4 bg-white shadow-md p-2 rounded">
              <div className="w-1/3 bg-gray-300">
                <img className="w-full" src="https://via.placeholder.com/160x90" alt="Related Video" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm">Fake Related Video Title {index + 1}</h3>
                <div className="text-gray-600 text-xs">Fake Channel • 100K views • 3 days ago</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default YouTubeWatchPage;




