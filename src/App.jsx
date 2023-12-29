import "./App.css";
import { useEffect, useState } from "react";

const initialPermissionList = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
];

const RowsList = [
  "List",
  "Create",
  "Edit",
  "Show",
  "Delete",
  "Export",
  "Import",
];

const ColumnList = [
  "DashBoard",
  "Storage",
  "Custom Provider",
  "Stock Out",
  "Invoice",
  "Unloading",
  "User",
  "Role",
];

const RowsNullList = [true, false, false, true, false, false, false];

const ColumnsNullList = [false, true, false, false, false, false, true, false];

function App() {
  const [permissionList, setPermissionList] = useState(initialPermissionList);
  const [checkAll, setCheckAll] = useState(false);
  const [rowsNullChecker, setRowsNullChecker] = useState(false);
  const [columnNullChecker, setColumnNullChecker] = useState(false);
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
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[j][col] = true;
        }
      }
    } else {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[j][col] = false;
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
        }
      }
    } else {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[row][j] = false;
        }
      }
    }
  };

  const handleCheckBoxChange = (row, col) => {
    const AllowedColumns = [1, 2, 3, 4, 5, 6, 7];
    const AllowedRows = [0, 1, 2, 3, 4, 5, 6, 7];
    // for column checkbox
    if (row == 0 && AllowedColumns.includes(col)) {
      handleColumnCheckbox(row, col);
      // for row checkbox
    } else if (col == 0 && AllowedRows.includes(row)) {
      handleRowCheckbox(row, col);
      // default
    } else if (AllowedColumns.includes(row) && AllowedColumns.includes(col)) {
      handleOneCheckbox(row, col);
      handleNullChecker(row, col);
    } else {
      handleOneCheckbox(row, col);
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

  const handleNullChecker = (row, col) => {
    if (TrueChecker()) {
      setCheckAllNullChecker(true);
    } else {
      setCheckAllNullChecker(false);
    }
  };

  useEffect(() => {}, [permissionList, checkAllNullChecker]);

  return (
    <div className="main">
      <div className="rowsList">
        <div className="checkAll">
          <input
            type="checkbox"
            defaultChecked={false}
            checked={checkAll}
            onChange={() => {
              handleAllCheckbox();
            }}
          />
          CheckAll
          {checkAllNullChecker && <p className="null">Null</p>}
        </div>
        {RowsList.map((name, nameIndex) => (
          <div key={nameIndex} className="rowName">
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className="wrapper">
        <div className="column">
          {ColumnList.map((name, nameIndex) => (
            <div key={nameIndex} className="columnName">
              <p>{name}</p>
              {rowsNullChecker && <p className="null">Null</p>}
            </div>
          ))}
        </div>
        <div className="checkboxes">
          {permissionList.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((value, colIndex) => (
                <input
                  key={colIndex}
                  type="checkbox"
                  checked={value}
                  onChange={() => {
                    handleCheckBoxChange(rowIndex, colIndex);
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
