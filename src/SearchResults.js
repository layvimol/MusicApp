import React from "react";


const SearchResults = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {results.map((result) => (
        <div
        key={result.id}
        className="bg-white rounded-lg overflow-hidden shadow-md p-4 hover:bg-blue-200 hover:text-blue-800"
        style={{transition: "all 0.3s", position: "relative"}}
      >
        <img
          src={result.album.cover_big}
          alt={result.album.title}
          className="w-full mb-4"
        />
        <h3 className="text-lg font-medium mb-2">{result.title}</h3>
        <p className="text-gray-700 mb-2 ">
          <span className="text-gray-700 " style={{position: "relative", zIndex: "2"}}>Artist: </span>
          <span className="artist-name " style={{position: "relative", zIndex: "2"}}>{result.artist.name}</span>
        </p>
        <p className="text-gray-700 mb-2 ">
          <span className="text-gray-700 " style={{position: "relative", zIndex: "2"}}>Album: </span>
          <span className="album-title " style={{position: "relative", zIndex: "2"}}>{result.album.title}</span>
        </p>
        <a
          href={result.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline hover:text-gray-800"
          style={{position: "relative", zIndex: "2"}}
        >
          View on Deezer
        </a>
        <div
          className="bg-blue-200 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-75 transition-opacity duration-300"
          style={{zIndex: "-1"}}
        ></div>
      </div>
      
      
      
      
      ))}
    </div>
  );
};

export default SearchResults;
