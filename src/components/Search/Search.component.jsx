import React from 'react';


const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <p>
          Searching for <strong>{searchTerm}</strong>
        </p>
        <label htmlFor="search" type="text">
          Search:
        </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
    );
  };

  export default Search