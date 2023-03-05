import React, { useState } from "react";
import axios from "axios";

const SearchForm = ({ setResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://deezerdevs-deezer.p.rapidapi.com/search", {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
        params: {
          q: searchQuery,
        },
      })
      .then((response) => {
        setResults(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for a track"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
