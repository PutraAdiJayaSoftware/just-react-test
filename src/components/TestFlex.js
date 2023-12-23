import React from 'react';
import './TestFlex.css';

const TestFlex = () => {
  return (
    <div className="flex-container">
      <div className="flex-row">
        <button>Tambah</button>
        <button>Import</button>
        <button>Export</button>
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <input type="text" placeholder="Search" />
        </div>
        <div className="flex-column">
          <select>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TestFlex;
