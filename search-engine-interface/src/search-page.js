import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResult = async () => {
        fetch(`http://localhost:8000/search?query=${searchQuery}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setSearchResults(data);
                console.log("response", data);
            });
    };

    useEffect(() => {
        getSearchResult();
    }, []);

    const handleSearch = async () => {
        getSearchResult();
    };

    return (
        <div>
            <div className='headerBackground'>
                <img src='https://pureportal.coventry.ac.uk/skin/headerImage/' />
            </div>

            <div className='searchSection'>
                <div>
                    <div className='header'>
                        <div>
                            <FontAwesomeIcon icon={faBookOpen} aria-hidden='true' style={{ marginRight: "20px", color: 'gray' }} />
                            <span>
                                Find Research Outputs
                            </span>
                        </div>
                    </div>
                    <div className='searchBox'>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter your search query"
                        />
                        <button onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} aria-hidden='true' style={{ color: 'gray' }} />
                        </button>
                    </div>
                </div>
            </div>

            <div className='searchResult'>
                <h2>Search Results</h2>
                <div className='pageDesc'>
                    50 - 100 out of 34,241 results Publication Year, Title (descending)  Export search results
                </div>
                {searchResults.length > 0 ? (
                    <div>
                        {
                            searchResults.map((value)=>{
                                <div>
                                    
                                </div>
                            })
                        }
                    </div>
                    // <ul>
                    //     {searchResults.map((result, index) => (
                    //         <li key={index}>
                    //             <a href={result.url}>{result.title}</a>
                    //         </li>
                    //     ))}
                    // </ul>
                ) : (
                    <p>No search results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
