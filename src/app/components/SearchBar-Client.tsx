"use client";
import { useState, useEffect } from "react";

type SearchResult = {
  id: number;
  title: string;
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // try {
    //   // Perform your fetch query here
    //   // Replace the fetch URL and logic with your actual search implementation
    //   const response = await fetch(`/api/search?term=${searchTerm}`);
    //   const data = await response.json();

    //   setResults(data.results);
    // } catch (error: any) {
    //   setError(error.message);
    // }

    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="search-bar-container">
      <div className="relative flex w-full gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className=" search-button">
          Search
        </button>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
