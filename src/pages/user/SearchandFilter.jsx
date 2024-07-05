// // components/SearchForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchForm = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`/api/organizations/search?query=${query}`);
//       onSearch(response.data);
//     } catch (error) {
//       console.error('Error searching organizations:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search organizations..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchForm;
