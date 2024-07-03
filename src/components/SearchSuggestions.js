import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
function SearchSuggestions({suggestion}) {
  return (
    <div className="fixed left-96 w-[400px] mx-auto mt-9 pl-7">
      <div className="fixed z-10 w-[390px] bg-white rounded-lg mt-1 shadow-lg">
        {suggestion.map((suggestion, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-200 cursor-pointer font-light text-sm rounded-xl items-center"
          >
            <FontAwesomeIcon icon={faSistrix} className='h-3'/>  {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchSuggestions;
