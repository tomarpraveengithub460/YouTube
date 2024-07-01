import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as HomeIcon } from '../assets/Home.svg'
import { ReactComponent as ShortsIcon } from "../assets/Shorts.svg";
import { ReactComponent as SubscriptionIcon } from "../assets/Subscription.svg";
import { ReactComponent as HistoryIcon } from '../assets/History.svg'
import { ReactComponent as PlaylistIcon } from '../assets/Playlist.svg';
import { ReactComponent as WatchLaterIcon } from '../assets/WatchLater.svg';
import { ReactComponent as LikedVideosIcon } from '../assets/LikedVideos.svg';
import { ReactComponent as TrendingIcon } from '../assets/Trending.svg';
import { ReactComponent as ShoppingIcon } from '../assets/Shopping.svg';
import { ReactComponent as MusicIcon } from '../assets/Music.svg';
import { ReactComponent as FilmsIcon } from '../assets/Films.svg';
import { ReactComponent as LiveIcon } from '../assets/Live.svg';
import { ReactComponent as GamingIcon } from '../assets/Gaming.svg';
import { ReactComponent as NewsIcon } from '../assets/News.svg';
import { ReactComponent as SportIcon } from '../assets/Sport.svg';
import { ReactComponent as CourseIcon } from '../assets/Courses.svg';
import { ReactComponent as FashionIcon } from '../assets/Fashion.svg';
import { ReactComponent as PodcastIcon } from '../assets/Podcast.svg';
import { ReactComponent as PremiumIcon } from '../assets/YouTubePremium.svg';
import { ReactComponent as PremiumMusicIcon } from '../assets/YouTubeMusic.svg';
import { ReactComponent as YouTubeKidsIcon } from '../assets/YouTubeKids.svg';
import { ReactComponent as SettingsIcon } from '../assets/Settings.svg';
import { ReactComponent as ReportHistoryIcon } from '../assets/ReportHistory.svg';
import { ReactComponent as HelpIcon } from '../assets/Help.svg';
import { ReactComponent as FeedbackIcon } from '../assets/Feedback.svg';
import SmallSidebar from './SmallSidebar';
import '../index.css';

import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
    const {showSidebar}=props;
    return showSidebar?<SmallSidebar/>: (
            <div className='sidebar flex flex-col list-container h-[93vh] scrollbar-hide overflow-y-scroll'>
                <ul>
                    <li>
                        <div><HomeIcon /></div>
                        <div>Home</div>
                    </li>
                    <li>
                        <div><ShortsIcon /></div>
                        <div>Shorts</div>
                    </li>
                    <li>
                        <div><SubscriptionIcon /></div>
                        <div>Subscriptions</div>
                    </li>
                </ul>
                <hr></hr>

                <ul>
                    <li>
                        <div className='font-bold'>You</div>
                        <div ><FontAwesomeIcon icon={faGreaterThan} /></div>
                    </li>

                    <li>
                        <div><HistoryIcon /></div>
                        <div>History</div>
                    </li>

                    <li>
                        <div><PlaylistIcon /></div>
                        <div>Playlist</div>
                    </li>

                    <li>
                        <div><WatchLaterIcon /></div>
                        <div>Watch Later</div>
                    </li>

                    <li>
                        <div><LikedVideosIcon /></div>
                        <div>Liked Videos</div>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <div className='font-bold'>Explore</div>
                    </li>

                    <li>
                        <div><TrendingIcon /></div>
                        <div>Trending</div>
                    </li>

                    <li>
                        <div><ShoppingIcon /></div>
                        <div>Shoppping</div>
                    </li>

                    <li>
                        <div><MusicIcon /></div>
                        <div>Music</div>
                    </li>

                    <li>
                        <div><FilmsIcon /></div>
                        <div>Films</div>
                    </li>

                    <li>
                        <div><LiveIcon /></div>
                        <div>Live</div>
                    </li>

                    <li>
                        <div><GamingIcon /></div>
                        <div>Gaming</div>
                    </li>
                    <li>
                        <div><NewsIcon /></div>
                        <div>News</div>
                    </li>

                    <li>
                        <div><SportIcon /></div>
                        <div>Sport</div>
                    </li>
                    <li>
                        <div><CourseIcon /></div>
                        <div>Courses</div>
                    </li>
                    <li>
                        <div><FashionIcon /></div>
                        <div>Fashion & Beauty</div>
                    </li>
                    <li>
                        <div><PodcastIcon /></div>
                        <div>Podcasts</div>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <div className='font-bold'>More from You Tube</div>
                    </li>
                    <li>
                        <div className='w-5'><PremiumIcon /></div>
                        <div>You Tube Premium</div>
                    </li>
                    <li>
                        <div className='w-5'><PremiumMusicIcon /></div>
                        <div>You Tube Music</div>
                    </li>
                    <li>
                        <div className='w-5'><YouTubeKidsIcon /></div>
                        <div>You Tube Kids</div>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <div><SettingsIcon /></div>
                        <div>Settings</div>
                    </li>
                    <li>
                        <div><ReportHistoryIcon /></div>
                        <div>Report History</div>
                    </li>
                    <li>
                        <div><HelpIcon /></div>
                        <div>Help</div>
                    </li>
                    <li>
                        <div><FeedbackIcon /></div>
                        <div>Feedback</div>
                    </li>
                </ul>
                <hr></hr>
                <p className='text-xs text-center p-4'>
                © 2024 Google LLC
                </p>
            </div>

    )
}
export default Sidebar;