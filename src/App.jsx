import React from "react";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import "./App.css";
import { ColumnNames } from "./utils";

const App = () => {
  return (
    <div className="row_container">
      <div className="columnNames">
        {ColumnNames.map((name, index) => (
          <div key={index}>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <IndeterminateCheckbox />
    </div>
  );
};

export default App;
