import React from "react";

function CityList({ countryId, stateId, cities, editCity, deleteCity }) {
  return (
    <div className="city-list">
      <h4>Cities</h4>
      {cities.length === 0 ? (
        <p>No cities added yet.</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city.id} className="city-item">
              <span className="city-name">{city.name}</span>
              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() => editCity(countryId, stateId, city.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteCity(countryId, stateId, city.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityList;
