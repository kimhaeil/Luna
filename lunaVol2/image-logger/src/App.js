import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NewPage from './pages/newPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewPage />} />
      <Route path="/:category" element={<NewPage />} />
    </Routes>
  );
};

export default App;
