import React from 'react';
import './Filter.css';
const Filter = ({ onFilter }) => {
  return (
    <div className="filter">
      <label htmlFor="classFilter">Filter by class:</label>
      <select id="classFilter" onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
};
export default Filter;
