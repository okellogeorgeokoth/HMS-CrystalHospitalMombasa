import { useState } from "react";

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    age: 0,
    phoneNumber: "",
    country: "Kenya",
    county: "Juja sub county",
    bloodGroup: "",
    gender: "",
    kinFirstName: "",
    kinLastName: "",
    kinPhoneNumber: "",
    insuranceCompany: "",
    insurancePolicyNumber: "",
  });

  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("biodata");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === "dob") {
        // Calculate Age when Date of Birth is updated
        const dob = new Date(value);
        const age = new Date().getFullYear() - dob.getFullYear();
        newData.age = age;
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPatients = patients.map((patient, index) =>
        index === editingIndex ? formData : patient
      );
      setPatients(updatedPatients);
      setEditingIndex(null);
    } else {
      setPatients([...patients, formData]);
    }
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      age: 0,
      phoneNumber: "",
      country: "Kenya",
      county: "Juja sub county",
      bloodGroup: "",
      gender: "",
      kinFirstName: "",
      kinLastName: "",
      kinPhoneNumber: "",
      insuranceCompany: "",
      insurancePolicyNumber: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setEditingIndex(index);
  };

  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPatients.length / 3);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * 3,
    currentPage * 3
  );

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Patient Registration</h1>

      {/* Patient List */}
     

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow mt-4">
        {/* Biodata Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Patient Information</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Age*</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Phone Number*</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold">Country*</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">County*</label>
              <input
                type="text"
                name="county"
                value={formData.county}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">--select--</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold">Gender*</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">--select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Next of Kin Section */}
        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <h2 className="text-xl font-semibold">Next of Kin</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold">First Name</label>
              <input
                type="text"
                name="kinFirstName"
                value={formData.kinFirstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Last Name</label>
              <input
                type="text"
                name="kinLastName"
                value={formData.kinLastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold">Phone Number</label>
            <input
              type="tel"
              name="kinPhoneNumber"
              value={formData.kinPhoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Insurance Information Section */}
        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <h2 className="text-xl font-semibold">Insurance Information</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-semibold">Insurance Company</label>
              <input
                type="text"
                name="insuranceCompany"
                value={formData.insuranceCompany}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Insurance Policy Number</label>
              <input
                type="text"
                name="insurancePolicyNumber"
                value={formData.insurancePolicyNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            {editingIndex !== null ? "Update Patient" : "Register Patient"}
          </button>
        </div>
      </form>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search patients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <ul className="mt-4 space-y-2">
          {paginatedPatients.map((patient, index) => (
            <li key={index} className="flex justify-between items-center p-3 border border-gray-300 rounded">
              <div>
                <div>{patient.firstName} {patient.lastName}</div>
                <div className="text-sm text-gray-600">{patient.phoneNumber}</div>
              </div>
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white py-1 px-2 rounded"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-between">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-gray-300 text-gray-700 py-1 px-4 rounded"
          >
            Previous
          </button>
          <span className="flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-gray-300 text-gray-700 py-1 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
