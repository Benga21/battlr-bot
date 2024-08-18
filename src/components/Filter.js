import React from 'react';

const Filter = ({ onFilter }) => (
  <select onChange={(e) => onFilter(e.target.value)}>
    <option value="">All</option>
    <option value="Support">Support</option>
    <option value="Medic">Medic</option>
    <option value="Assault">Assault</option>
    <option value="Defender">Defender</option>
    <option value="Captain">Captain</option>
    <option value="Witch">Witch</option>
  </select>
);

export default Filter;
