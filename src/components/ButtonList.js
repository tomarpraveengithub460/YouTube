import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const HorizontalScroller = () => {
    useEffect(() => {
        const container = document.querySelector('.scroll-container');

        const scrollHandler = () => {
            const showLeftArrow = container.scrollLeft > 0;
            const showRightArrow = container.scrollLeft < (container.scrollWidth - container.clientWidth);

            const leftArrow = document.querySelector('.scroll-left-arrow');
            const rightArrow = document.querySelector('.scroll-right-arrow');

            if (leftArrow) {
                leftArrow.style.display = showLeftArrow ? 'block' : 'none';
            }

            if (rightArrow) {
                rightArrow.style.display = showRightArrow ? 'block' : 'none';
            }
        };

        container.addEventListener('scroll', scrollHandler);

        return () => {
            container.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollLeft = () => {
        const container = document.querySelector('.scroll-container');
        container.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        const container = document.querySelector('.scroll-container');
        container.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative flex items-center space-between">
            <button 
            className="absolute left-0 z-10 p-2 w-10 bg-white hover:bg-gray-400 
            text-black scroll-left-arrow rounded-tr-xl rounded-br-xl hover:rounded-full" 
            onClick={scrollLeft} style={{ display: 'none' }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div className="scroll-container flex overflow-x-auto space-x-4 py-4 hide-scrollbar " 
            style={{ scrollBehavior: 'smooth' }}>
                <div>All</div>
                <div>Music</div>
                <div>Movies</div>
                <div>Video 4</div>
                <div>Video 5</div>
                <div>Video 6</div>
                <div>Video 7</div>
                <div>Video 8</div>
                <div>Video 5</div>
                <div>Video 6</div>
                <div>Video 7</div>
                <div>Video 8</div>
                <div>Video 5</div>
                <div>Video 6</div>
                <div>Video 7</div>
                <div>Video 8</div>
                <div>Video 5</div>
                <div>Video 6</div>
                <div>Video 7</div>
                <div>Video 8</div>
            </div>
            <button
                className="absolute right-0 z-10 p-2 bg-white hover:bg-gray-400 
                w-10 size-10 text-black font-bold scroll-right-arrow rounded-tl-xl rounded-bl-xl hover:rounded-full"
                onClick={scrollRight}
                style={{ display: 'none' }}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
};         
export default HorizontalScroller;












