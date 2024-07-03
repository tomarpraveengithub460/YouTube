import React, { useEffect } from 'react';
import { useState } from 'react';
const VideoCard = ({ video }) => {

  const apiKey=process.env.REACT_APP_YOUTUBE;

  const [channelLogo, setChannelLogo] = useState("");
  // console.log("This is Vodeo : ", video);

  const duration=video.contentDetails.duration;

  const convertDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parseInt(match[1]?.replace('H', '')) || 0;
    const minutes = parseInt(match[2]?.replace('M', '')) || 0;
    const seconds = parseInt(match[3]?.replace('S', '')) || 0;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  };

  const { hours, minutes, seconds } = convertDuration(duration);


  useEffect(() => {
    getChannelLogo();
  })

  async function getChannelLogo() {
    const channel = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${apiKey}`);
    const channelData = await channel.json();
    // console.log(channelData?.items[0]?.snippet?.thumbnails?.high?.url);
    setChannelLogo(channelData?.items[0]?.snippet?.thumbnails?.high?.url);
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
    <div className=" w-[368.32px] overflow-hidden rounded-xl">
      
      
      <div className='relative'>
      <img className="w-full" src={(video?.snippet?.thumbnails?.maxres?.url) ? (video?.snippet?.thumbnails?.maxres?.url) : (video?.snippet?.thumbnails?.maxres?.url)} alt={video.snippet.channelTitle}/>
      <div className='absolute top-[185px] right-[10px] bg-gray-800 opacity-70 text-white font-bold rounded-md px-2 text-xs'>{hours}:{minutes}:{seconds}</div>
      </div>
      <div className="px-4 pt-2 pb-1">
        <div className='flex'>
          <img className="w-10 h-10 rounded-full mr-2" src={channelLogo} alt={video.channel} />
          <div className="font-bold text-sm mb-1">{video.snippet.localized.title}</div>
        </div>
        <div className="flex items-center ml-12">
          <div>
            <div className="text-xs font-light">{video.snippet.channelTitle}</div>
            <div className="text-xs text-gray-600">{video.statistics.viewCount} • {calculateTimeSincePublished(video.snippet.publishedAt)}</div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default VideoCard;









