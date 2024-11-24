import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import Header from './components/header.jsx';
import PatientRegistration from './pages/PatientRegistration.jsx';
import Triage from './pages/Triage.jsx';
import ClinicianNotes from './pages/ClinicianNotes.jsx';
import Laboratory from './pages/Laboratory.jsx';
import Pharmacy from './pages/Phamacy.jsx';
import Billing from './pages/Billing.jsx';
import Inventory from './pages/Inventory.jsx';
import QueueManagement from './pages/QueueManagement.jsx';
import Vaccination from './pages/Vaccination.jsx';
import Reports from './pages/Reports.jsx';
import Admin from './pages/Admin.jsx';
import Sidebar from './components/Sidebar.jsx';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-[30%]' : 'ml-0'
        }`}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Routes for Main Content */}
        <div className={`bg-white p-4 md:p-8 lg:p-16 flex-1 transition-all duration-300 min-h-screen text-center ${
    isSidebarOpen ? 'ml-[60%] sm:ml-[40%] md:ml-[-10%]' : 'ml-0' }`}>
          <Routes>
            <Route path="/patient-registration" element={<PatientRegistration />} />
            <Route path="/triage" element={<Triage />} />
            <Route path="/clinician-notes" element={<ClinicianNotes />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/queue-management" element={<QueueManagement />} />
            <Route path="/vaccination" element={<Vaccination />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
