import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import './index.css';


function App() {
const [results, setResults] = useState([]);

return (
<div className="container mx-auto px-4">
<h1 className="text-2xl font-medium text-gray-600 mt-4">Search your song playlist</h1>
<SearchForm setResults={setResults} />
{results.length > 0 && <SearchResults results={results} />}
<footer className="py-4 text-center text-gray-500 text-sm">
  &copy; 2023 Lay Vimol . All rights reserved.
</footer>

</div>

);
}

export default App;