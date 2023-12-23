 
import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store';
import TestGrid from './components/TestGrid';
import TestFlex from './components/TestFlex';
import TestSelect from './components/TestSelect';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div> 
          <Routes>
            <Route path="/test-grid" element={<TestGrid />} /> 
            <Route path="/test-flex" element={<TestFlex />} /> 
            <Route path="/test-select" element={<TestSelect />} /> 
          </Routes> 
        </div>
    </Router>
  </Provider> 
  );
}

export default App;
