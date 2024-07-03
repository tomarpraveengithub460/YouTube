import React from 'react';
import { ReactComponent as HomeIcon } from '../assets/Home.svg'
import { ReactComponent as ShortsIcon } from "../assets/Shorts.svg";
import { ReactComponent as SubscriptionIcon } from "../assets/Subscription.svg";
import {ReactComponent as YouIcon} from '../assets/You.svg';
const SmallSidebar = () => {
    return (
        <div className='flex flex-col h-[93vh] small-list-container fixed'>
                <ul>
                    <li className='flex flex-col items-center'>
                        <div className='w-6'><HomeIcon /></div>
                        <div className='text-xs'>Home</div>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='w-6'><ShortsIcon /></div>
                        <div className='text-xs'>Shots</div>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='w-6'><SubscriptionIcon /></div>
                        <div className='text-xs'>Subscription</div>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='w-6'><YouIcon /></div>
                        <div className='text-xs'>You</div>
                    </li>
                </ul>

            </div>
    )
}
export default SmallSidebar;