import { useState } from 'react';
import MainContent from './components/MainContent.jsx';  // Assuming MainContent is in a separate file
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing the icons for open/close menu
import Sidebar from './components/sidebar.jsx';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <MainContent isSidebarOpen={isSidebarOpen} />

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="bg-blue-500 text-white p-2 rounded-md fixed top-4 left-4 z-50"
      >
        {/* Display the menu icon (FaBars) when the sidebar is closed, and FaTimes when it's open */}
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
}
