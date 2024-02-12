import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './component/UserCard'; // Import the UserCard component
import { getColorHexCode } from './component/color'; // Import the getColorHexCode function

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.results);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 users per page
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePagination = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="App p-8">
      <h1 className="text-3xl font-semibold mb-4">Users</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-lg mb-4"
      />
      {/* <p className="text-gray-600"></p> */}
      {loading && <div class="spinner">
        <div></div>   
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
      </div>
}
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.name} user={user} getColorHexCode={getColorHexCode} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePagination('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => handlePagination('next')}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
