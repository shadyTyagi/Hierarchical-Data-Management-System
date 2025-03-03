import React, { useState } from "react";
import CityList from "./CityList";

function StateList({
  countryId,
  states,
  editState,
  deleteState,
  addCity,
  deleteCity,
}) {
  const [expandedState, setExpandedState] = useState(null);

  const toggleState = (stateId) => {
    if (expandedState === stateId) {
      setExpandedState(null);
    } else {
      setExpandedState(stateId);
    }
  };

  return (
    <div className="state-list">
      <h3>States</h3>
      {states.length === 0 ? (
        <p>No states added yet.</p>
      ) : (
        <ul>
          {states.map((state) => (
            <li key={state.id} className="state-item">
              <div className="state-header">
                <span
                  className="state-name"
                  onClick={() => toggleState(state.id)}
                >
                  {state.name}
                  <span className="toggle-icon">
                    {expandedState === state.id ? "▼" : "►"}
                  </span>
                </span>
                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => editState(countryId, state.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteState(countryId, state.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="add-city-btn"
                    onClick={() => addCity(countryId, state.id)}
                  >
                    Add City
                  </button>
                </div>
              </div>

              {expandedState === state.id && (
                <CityList
                  countryId={countryId}
                  stateId={state.id}
                  cities={state.cities}
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

export default StateList;
