import "./App.css";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { ColumnList, RowsList, initialPermissionList } from "./utils";

function App() {
  const [permissionList, setPermissionList] = useState(initialPermissionList);
  const [checkAll, setCheckAll] = useState(false);
  const [rowsNullChecker, setRowsNullChecker] = useState(RowsList);
  const [columnNullChecker, setColumnNullChecker] = useState(ColumnList);
  const [checkAllNullChecker, setCheckAllNullChecker] = useState(false);

  const handleOneCheckbox = (row, col) => {
    // for single check
    const newPermissionList = [...permissionList];
    newPermissionList[row][col] = !newPermissionList[row][col];
    setPermissionList(newPermissionList);
  };

  const handleAllCheckbox = () => {
    // for check all
    if (checkAll) {
      setCheckAll(false);
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[i][j] = true;
        }
      }
    } else {
      setCheckAll(true);
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[i][j] = false;
        }
      }
    }
  };

  const handleColumnCheckbox = (row, col) => {
    const newPermissionList = [...permissionList];
    newPermissionList[row][col] = !newPermissionList[row][col];
    setPermissionList(newPermissionList);

    if (permissionList[row][col] === true) {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j <= updatedPermList[i].length; j++) {
          updatedPermList[j][col] = true;
          if (TrueChecker) {
            setCheckAllNullChecker(true);
          }
        }
      }
    } else {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j <= updatedPermList[i].length; j++) {
          updatedPermList[j][col] = false;
          if (!TrueChecker) {
            setCheckAllNullChecker(false);
            setColumnNullChecker(false);
            setRowsNullChecker(false);
          }
        }
      }
    }
  };

  const handleRowCheckbox = (row, col) => {
    const newPermissionList = [...permissionList];
    newPermissionList[row][col] = !newPermissionList[row][col];
    setPermissionList(newPermissionList);

    if (permissionList[row][col] === true) {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[row][j] = true;
          setCheckAllNullChecker(true);
        }
      }
    } else {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[row][j] = false;
          setCheckAllNullChecker(false);
        }
      }
    }
  };

  const handleCheckBoxChange = (row, col) => {
    const AllowedColumns = [1, 2, 3, 4, 5, 6, 7];
    const AllowedRows = [1, 2, 3, 4, 5, 6, 7, 8];
    // for column checkbox
    if (row === 0 && AllowedColumns.includes(col)) {
      handleColumnCheckbox(row, col);
      // for row checkbox
    } else if (col === 0 && AllowedRows.includes(row)) {
      handleRowCheckbox(row, col);
    } else {
      handleOneCheckbox(row, col);
      handleNullChecker(row, col);
    }
  };

  const TrueChecker = () => {
    const updatedPermList = [...permissionList];
    for (let i = 0; i < updatedPermList.length; i++) {
      for (let j = 0; j < updatedPermList[i].length; j++) {
        if (updatedPermList[i][j] === true) {
          return true;
        }
      }
    }
    return false;
  };

  const handleRowsNullChecker = (col) => {
    let hasTrueValue = false;

    RowsList.forEach((obj) => {
      if (obj.id === col && TrueChecker()) {
        obj.isNull = true;
        hasTrueValue = true;
      } else if (obj.id === col && !TrueChecker()) {
        obj.isNull = false;
      } else if (obj.isNull) {
        // Keep null for other indices
        hasTrueValue = true;
      }
    });

    if (!hasTrueValue) {
      setRowsNullChecker(false); // Set to false if no true values
    } else {
      setRowsNullChecker(true);
    }
  };

  const handleColumnNullChecker = (row) => {
    let hasTrueValue = false;

    ColumnList.forEach((obj) => {
      if (obj.id === row && TrueChecker()) {
        obj.isNull = true;
        hasTrueValue = true;
      } else if (obj.id === row && !TrueChecker()) {
        obj.isNull = false;
      } else if (obj.isNull) {
        // Keep null for other indices
        hasTrueValue = true;
      }
    });

    if (!hasTrueValue) {
      setColumnNullChecker(false); // Set to false if no true values
    } else {
      setColumnNullChecker(true);
    }
  };

  const handleNullChecker = (row, col) => {
    if (TrueChecker()) {
      setCheckAllNullChecker(true);
      handleRowsNullChecker(col);
      handleColumnNullChecker(row);
    } else {
      setCheckAllNullChecker(false);
      handleRowsNullChecker(null);
      handleColumnNullChecker(null);
    }
  };

  
  useEffect(() => {}, [
    permissionList,
    checkAllNullChecker,
    rowsNullChecker,
    columnNullChecker,
  ]);

  return (
    <div className="main">
      <div className="rowsList">
        <div className="spacer"></div>
        <div className="checkAll">CheckAll</div>
        {RowsList.map((list) => (
          <div key={list.id} className="rowName">
            <p>{list.name}</p>
            {list.isNull === columnNullChecker}
            {list.isNull && (
              <IndeterminateCheckBoxIcon
                onClick={() => {
                  if (checkAllNullChecker) {
                    handleAllCheckbox();
                    setCheckAllNullChecker(false);
                  }
                }}
                className="null"
              />
            )}
          </div>
        ))}
      </div>
      <div className="wrapper">
        <div className="column">
          {ColumnList.map((colHeader) => (
            <div key={colHeader.id} className="columnName">
              <p>{colHeader.name}</p>
              {colHeader.isNull === columnNullChecker}
              {colHeader.isNull && (
                <IndeterminateCheckBoxIcon
                  onClick={() => {
                    if (checkAllNullChecker) {
                      handleAllCheckbox();
                      setCheckAllNullChecker(false);
                    }
                  }}
                  className="null"
                />
              )}
            </div>
          ))}
        </div>
        <div className="checkboxes">
          {permissionList.map((row, rowIndex) =>
            rowIndex % 2 ? (
              <div key={rowIndex} className="row">
                {row.map((value, colIndex) => {
                  return rowIndex === 0 &&
                    colIndex === 0 &&
                    checkAllNullChecker ? (
                    <IndeterminateCheckBoxIcon
                      sx={{ fontSize: 40 }}
                      key={colIndex}
                      onClick={() => {
                        if (checkAllNullChecker) {
                          handleAllCheckbox();
                          setCheckAllNullChecker(false);
                        }
                      }}
                      className="null"
                    />
                  ) : (
                    <Checkbox
                      key={colIndex}
                      type="checkbox"
                      defaultChecked
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 30 }
                      }}
                      checked={value}
                      onChange={() => {
                        handleCheckBoxChange(rowIndex, colIndex);
                        if (rowIndex === 0 && colIndex === 0) {
                          handleAllCheckbox(), setCheckAllNullChecker(false);
                        }
                      }}
                    />
                  );
                })}
              </div>
            ) : (
              <div key={rowIndex} className="row2">
                {row.map((value, colIndex) => {
                  return rowIndex === 0 &&
                    colIndex === 0 &&
                    checkAllNullChecker ? (
                    <IndeterminateCheckBoxIcon
                      key={colIndex}
                      onClick={() => {
                        if (checkAllNullChecker) {
                          handleAllCheckbox();
                          setCheckAllNullChecker(false);
                        }
                      }}
                      className="null"
                    />
                  ) : (
                    <Checkbox
                      key={colIndex}
                      type="checkbox"
                      defaultChecked
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 30 },
                        color: pink[600],
                      }}
                      checked={value}
                      onChange={() => {
                        handleCheckBoxChange(rowIndex, colIndex);
                        if (rowIndex === 0 && colIndex === 0) {
                          handleAllCheckbox(), setCheckAllNullChecker(false);
                        }
                      }}
                    />
                  );
                })}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
