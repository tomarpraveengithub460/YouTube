import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as YouTubeIcon } from '../assets/YouTubeIcon.svg';
import { ReactComponent as HamburgerIcon } from '../assets/Hamburger.svg';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Head = (props) => {

    const {setShowSidebar}=props;
    return (
            <div className="head w-full h-[7vh]">
                <div className='grid grid-flow-col bg-white border-gray-700 fixed w-full px-2 py-2 z-10'>
                    <div className='flex'>
                        <div className='h-10 mt-1 ml-3 hover:bg-gray-200 pt-2 px-2  rounded-full' onClick={setShowSidebar}><div className='rounded-full cursor-pointer'><HamburgerIcon /></div></div>
                        <div className='h-5 ml-6 mt-3'><YouTubeIcon /></div>
                    </div>
                    <div>
                        <input type='text' placeholder='Search' className='w-10/12 h-2 mt-1 border-2 border-gray-100 rounded-l-full p-4' />
                        <button ><span className='p-2 px-4 border-1 border-gray-200 rounded-r-full bg-gray-100'><FontAwesomeIcon icon={faSistrix} className='h-5' /></span></button>
                    </div>
                    <div className='flex justify-end'>
                        <div className='h-8 p-1 border-2 mr-10 mt-2 border-black rounded-full'>
                            <FontAwesomeIcon icon={faUser} className='size-5' />
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Head;
