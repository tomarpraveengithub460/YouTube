import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as YouTubeIcon } from '../assets/YouTubeIcon.svg';
import { ReactComponent as HamburgerIcon } from '../assets/Hamburger.svg';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { toggle } from '../features/sidebar/Sidebar';
import SearchSuggestions from './SearchSuggestions';
import { SUGGESTION_API_LINK } from '../constants';
import { cacheResults } from '../features/suggestions/searchSlice';
import { useSelector } from 'react-redux';

const Head = () => {
    const dispatch = useDispatch();
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestedSearch, setsuggestedSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const searchCache=useSelector((store)=>store.search);

    const handleFocusInput = () => {
        setShowSuggestions(true);
    };

    const handleBlurInput = () => {
        // Delay hiding suggestions to allow click on suggestions
        setTimeout(() => {
            setShowSuggestions(false);
        }, 100);
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchValue])
                setsuggestedSearch(searchCache[searchValue])
            else
                getSuggestions()
        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchValue]);

    async function getSuggestions() {
        const suggestion = await fetch(SUGGESTION_API_LINK + searchValue);
        const jsonData = await suggestion.json();
        setsuggestedSearch(jsonData[1]);
        dispatch(
            cacheResults({
                [searchValue]: jsonData[1]
            })
        )
    }

    return (
        <div className="head w-full h-[7vh] z-50 bg-white">
            <div className='grid grid-flow-col bg-white border-gray-700 fixed w-full px-2 py-2 z-50'>
                <div className='flex'>
                    <div className='h-10 mt-1 ml-3 hover:bg-gray-200 pt-2 px-2 rounded-full' onClick={() => dispatch(toggle())}>
                        <div className='rounded-full cursor-pointer'><HamburgerIcon /></div>
                    </div>
                    <div className='h-5 ml-6 mt-3'><YouTubeIcon /></div>
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-10/12 h-2 mt-1 font-light text-sm border-2 border-gray-100 rounded-l-full p-4 focus:outline-none'
                        onFocus={handleFocusInput}
                        onBlur={handleBlurInput}
                        onChange={handleChange}
                    />
                    <button><span className='p-2 px-4 border-1 border-gray-200 rounded-r-full bg-gray-100'><FontAwesomeIcon icon={faSistrix} className='h-5' /></span></button>
                </div>
                <div className=''>
                    {showSuggestions && <SearchSuggestions suggestion={suggestedSearch} />}
                </div>
                <div className='flex justify-end'>
                    <div className='h-8 p-1 border-2 mr-10 mt-2 border-black rounded-full'>
                        <FontAwesomeIcon icon={faUser} className='size-5' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;
