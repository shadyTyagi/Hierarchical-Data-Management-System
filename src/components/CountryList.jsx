import React, { useState } from "react";
import StateList from "./StateList";

function CountryList({
  countries,
  addCountry,
  editCountry,
  deleteCountry,
  addState,
  editState,
  deleteState,
  addCity,
  deleteCity,
}) {
  const [expandedCountry, setExpandedCountry] = useState(null);

  const toggleCountry = (countryId) => {
    if (expandedCountry === countryId) {
      setExpandedCountry(null);
    } else {
      setExpandedCountry(countryId);
    }
  };

  return (
    <div className="country-list">
      <h2>Countries</h2>
      <button className="add-btn" onClick={addCountry}>
        Add Country
      </button>

      {countries.length === 0 ? (
        <p>No countries added yet.</p>
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.id} className="country-item">
              <div className="country-header">
                <span
                  className="country-name"
                  onClick={() => toggleCountry(country.id)}
                >
                  {country.name}
                  <span className="toggle-icon">
                    {expandedCountry === country.id ? "▼" : "►"}
                  </span>
                </span>
                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => editCountry(country.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteCountry(country.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="add-state-btn"
                    onClick={() => addState(country.id)}
                  >
                    Add State
                  </button>
                </div>
              </div>

              {expandedCountry === country.id && (
                <StateList
                  countryId={country.id}
                  states={country.states}
                  editState={editState}
                  deleteState={deleteState}
                  addCity={addCity}
                  deleteCity={deleteCity}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountryList;
