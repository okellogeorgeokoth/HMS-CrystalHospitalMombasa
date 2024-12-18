import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'; // Importing icons

export default function Header({ toggleSidebar, isSidebarOpen, patients }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const matches = patients.filter((patient) =>
        patient.name.toLowerCase().includes(query)
      );
      setFilteredPatients(matches);
    } else {
      setFilteredPatients([]);
    }
  };

  return (
    <header className="bg-blue-600 fixed top-0 left-0 w-full p-2 z-50 shadow-lg">
      <div className="flex justify-between items-center container mx-auto">
        {/* Left Section (Sidebar Toggle Button + Title) */}
        <div className="flex items-center space-x-2 p-2">
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
            aria-label={isSidebarOpen ? "Close Menu" : "Open Menu"}
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <h1 className="text-white font-bold text-xl">Crystal Hospital Mombasa</h1>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="relative flex items-center w-full max-w-xs mx-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a patient..."
            className="w-full p-2 rounded-l-full text-center text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Search for a patient"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-700 transition duration-300"
            aria-label="Search"
          >
            <FaSearch size={22} />
          </button>
          {/* Dropdown for search results */}
          {filteredPatients.length > 0 && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto z-50">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => alert(`Patient Selected: ${patient.name}`)}
                >
                  {patient.name} - {patient.age} years old
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex space-x-2">
          <button
            className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-sm"
            aria-label="Total Patients"
          >
            Patients: 120
          </button>
          <button
            className="bg-yellow-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 text-sm"
            aria-label="Queue Count"
          >
            Queue: 15
          </button>
          <button
            className="bg-blue-700 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 text-sm"
            aria-label="Active Patients Count"
          >
            Active Patients: 60
          </button>
        </div>
      </div>
    </header>
  );
}

// Prop validation
Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Validate that toggleSidebar is a function
  isSidebarOpen: PropTypes.bool.isRequired, // Validate that isSidebarOpen is a boolean
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired, // Validate patients is an array of objects with id, name, and age
};
