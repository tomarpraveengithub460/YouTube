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
        <div className="grid grid-flow-col mr-4 justify-stretch">
            <button 
            className="relative z-10 mt-3 bg-white hover:bg-gray-400 w-10 size-10
            text-black font-bold scroll-left-arrow rounded-tr-xl rounded-br-xl hover:rounded-full" 
            onClick={scrollLeft} style={{ display: 'none' }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div className="scroll-container flex overflow-x-auto space-x-4 py-4 hide-scrollbar" 
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
                className="relative z-10 mt-3 bg-white hover:bg-gray-400 
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