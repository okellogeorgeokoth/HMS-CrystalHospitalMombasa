import PropTypes from 'prop-types'; // Import PropTypes for validation
import Billing from '../pages/Billing';

export default function MainContent({ isSidebarOpen }) {
  return (
    <div
      className={`bg-white p-16 flex-1 transition-all duration-300 min-h-screen ${
        isSidebarOpen ? 'ml-[30%]' : 'ml-0'
      }`}
    >
      <div className="text-center">
        <h1 className="text-red-300 font-bold underline">Main Content</h1>
        <Billing />
      </div>
    </div>
  );
}

// Prop validation
MainContent.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired, // Validate that isSidebarOpen is a boolean
};
