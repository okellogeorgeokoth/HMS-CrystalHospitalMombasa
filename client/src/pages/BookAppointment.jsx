import { useState } from "react";

export default function BookAppointment() {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
    doctor: "",
  });

  const [appointments, setAppointments] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleBookAppointment = () => {
    const { name, email, phone, date, time, department } = appointment;

    // Validate form
    if (!name || !email || !phone || !date || !time || !department) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Save appointment
    setAppointments([...appointments, { ...appointment, id: appointments.length + 1 }]);
    setAppointment({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      department: "",
      doctor: "",
    });
    alert("Appointment booked successfully!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={appointment.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={appointment.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={appointment.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Date */}
        <div>
          <label className="block text-sm font-semibold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Time */}
        <div>
          <label className="block text-sm font-semibold mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Department */}
        <div>
          <label className="block text-sm font-semibold mb-2">Department</label>
          <select
            name="department"
            value={appointment.department}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Department</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Doctor */}
        <div>
          <label className="block text-sm font-semibold mb-2">Doctor (Optional)</label>
          <input
            type="text"
            name="doctor"
            value={appointment.doctor}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <button
        onClick={handleBookAppointment}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Book Appointment
      </button>

      {/* Appointment List */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Your Appointments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-center">ID</th>
                <th className="px-4 py-2 border-b text-center">Name</th>
                <th className="px-4 py-2 border-b text-center">Date</th>
                <th className="px-4 py-2 border-b text-center">Time</th>
                <th className="px-4 py-2 border-b text-center">Department</th>
                <th className="px-4 py-2 border-b text-center">Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-center">{appt.id}</td>
                  <td className="px-4 py-2 border-b text-center">{appt.name}</td>
                  <td className="px-4 py-2 border-b text-center">{appt.date}</td>
                  <td className="px-4 py-2 border-b text-center">{appt.time}</td>
                  <td className="px-4 py-2 border-b text-center">{appt.department}</td>
                  <td className="px-4 py-2 border-b text-center">{appt.doctor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
