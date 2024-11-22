import PropTypes from 'prop-types'; // Import PropTypes for validation

export default function MainContent({ isSidebarOpen }) {
  return (
    <div
      className={`bg-white p-16 flex-1 transition-all duration-300 min-h-screen ${
        isSidebarOpen ? 'ml-[30%]' : 'ml-0'
      }`}
    >
      <div className="text-center">
        <h1 className="text-red-300 font-bold underline">Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ante ut est
          convallis, in posuere purus viverra. Curabitur nec libero at ante tincidunt suscipit.
        </p>
      </div>
    </div>
  );
}

// Prop validation
MainContent.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired, // Validate that isSidebarOpen is a boolean
};
