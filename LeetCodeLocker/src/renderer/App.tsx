import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppProvider from './providers/app';

const Hello = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        electron-react-boilerplate with tailwind
      </h1>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
