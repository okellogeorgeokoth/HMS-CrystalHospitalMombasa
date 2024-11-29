import { useState, useEffect } from 'react';  // For managing state and lifecycle
import PropTypes from 'prop-types';  // For prop validation

export default function CurrentUser({ selectedUser }) {
  // State to hold the user's data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulating an API call or using selectedUser prop directly
    if (selectedUser) {
      setUserData(selectedUser);
    }
  }, [selectedUser]);

  if (!userData) {
    return <div>Loading user data...</div>;  // Display loading text when data is being fetched
  }

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md ">
      <div className="mb-2">
        <strong>Full Name:</strong> {userData.fullName}
      </div>
      <div className="mb-2">
        <strong>Age:</strong> {userData.age}
      </div>
      {/* Add other user details as needed */}
      <div className="mb-2">
        <strong>Phone:</strong> {userData.phone}
      </div>
      {/* Add any other sections as necessary */}
    </div>
  );
}

// Prop validation to ensure correct data is passed
CurrentUser.propTypes = {
  selectedUser: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};
