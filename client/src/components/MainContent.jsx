import PropTypes from 'prop-types'; // Import PropTypes for validation
import PatientRegistration from '../pages/PatientRegistration';

export default function MainContent({ isSidebarOpen }) {
  return (
    <div
      className={`bg-white p-16 flex-1 transition-all duration-300 min-h-screen ${
        isSidebarOpen ? 'ml-[30%]' : 'ml-0'
      }`}
    >
      <div className="text-center mt-22">
        <PatientRegistration/>
      </div>
    </div>
  );
}

// Prop validation
MainContent.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired, // Validate that isSidebarOpen is a boolean
};
