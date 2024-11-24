import { BrowserRouter as Router} from 'react-router-dom';  // Import Router, Routes, and Route
import Header from './components/header.jsx';
import Layout from './Layout.jsx';  // Assuming Layout contains the Sidebar

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Layout />
      </div>
    </Router>
  );
}
