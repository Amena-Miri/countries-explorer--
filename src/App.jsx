import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const fetchCountries = async () => {
    setLoading(true);
    setError(null);

    try {
      let url;

      if (search.length >= 2) {
        url = `https://restcountries.com/v3.1/name/${search}`;
      } else if (region !== "all") {
        url = `https://restcountries.com/v3.1/region/${region}`;
      } else {
        url = `https://restcountries.com/v3.1/all?fields=name,flags,region,population,cca3`;
      }

      console.log("Fetching from:", url);

      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404 && search.length >= 2) {
          setCountries([]);
          setLoading(false);
          return;
        }
        throw new Error(`Failed to load countries. Status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setCountries(data);
      } else if (data && typeof data === `object`) {
        setCountries([data]);
      } else {
        setCountries([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to fetch countries. Please try again.");
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  //Fetch logic
  useEffect(() => {
    if (
      search.length >= 2 ||
      (!search && region !== "all") ||
      (!search && region === "all")
    ) {
      const timer = setTimeout(() => {
        fetchCountries();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [search, region]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  const handleRetry = () => {
    fetchCountries();
  };

  const clearFilters = () => {
    setSearch("");
    setRegion("all");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Countries Explorer</h1>
      </header>

      <div className="controls">
        <div className="search-section">
          <SearchBar onSearch={handleSearch} currentSearch={search}></SearchBar>
          <button className="clear-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        <RegionFilter
          selectedRegion={region}
          onRegionChange={handleRegionChange}
        ></RegionFilter>
      </div>

      {/* Loadind state */}
      {loading && (
        <div className="loading">
          <p>Loading Countries...</p>
          <div className="spinner"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error">
          <p>Error: {error}</p>
          <p className="error-hint">the API might be unavaliable</p>
          <button className="retry-btn" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}

      {/* No results state */}
      {!loading && !error && search.length >= 2 && countries.length === 0 && (
        <div className="no-result">
          <p>No countries found for "{search}" </p>
          <button onClick={clearFilters} className="clear-btn">
            Clear Search
          </button>
        </div>
      )}

      {/* Initial State */}
      {!loading &&
        !error &&
        search.length < 2 &&
        countries.length === 0 &&
        region === "all" && (
          <div className="initial-state">
            <p>Start by searching for a country or selecting a region </p>
            <p className="hint">
              Try searching for 'France' or select "Asia" region
            </p>
          </div>
        )}

      {/* Countries list */}
      {!loading && !error && countries.length > 0 && (
        <>
          <div className="results-info">
            <p>Found {countries.length} countries</p>
            {region !== "all" && (
              <span className="region-tag">Region: {region}</span>
            )}
            {search.length >= 2 && (
              <span className="search-tag">Search: "{search}"</span>
            )}
          </div>
          <CountryList countries={countries} />
        </>
      )}
    </div>
  );
}

export default App;
