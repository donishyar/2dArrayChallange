import "./App.css";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { lightBlue } from "@mui/material/colors";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const initialPermissionList = [
  [false, false, false, false, false, false, false, false],
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
  {
    id: 1,
    name: "List",
    isNull: false,
  },
  {
    id: 2,
    name: "create",
    isNull: false,
  },
  {
    id: 3,
    name: "Edit",
    isNull: false,
  },
  {
    id: 4,
    name: "Show",
    isNull: false,
  },
  {
    id: 5,
    name: "Delete",
    isNull: false,
  },
  {
    id: 6,
    name: "Export",
    isNull: false,
  },
  {
    id: 7,
    name: "Import",
    isNull: false,
  },
];

const ColumnList = [
  {
    id: 0,
    name: "DashBoard",
    isNull: false,
  },
  {
    id: 1,
    name: "Storage",
    isNull: false,
  },
  {
    id: 2,
    name: "Custom Provider",
    isNull: false,
  },
  {
    id: 3,
    name: "Stock Out",
    isNull: false,
  },
  {
    id: 4,
    name: "Invoice",
    isNull: false,
  },
  {
    id: 5,
    name: "Unloading",
    isNull: false,
  },
  {
    id: 6,
    name: "User",
    isNull: false,
  },
  {
    id: 7,
    name: "Role",
    isNull: false,
  },
];

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
    if (row == 0 && AllowedColumns.includes(col)) {
      handleColumnCheckbox(row, col);
      // for row checkbox
    } else if (col == 0 && AllowedRows.includes(row)) {
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
    setColumnNullChecker(false);
    setRowsNullChecker(false);
    return false;
  };

  const handleRowsNullChecker = (col) => {
    RowsList.forEach((obj) => {
      if (obj.id == col) {
        obj.isNull = true;
        setRowsNullChecker(true);
        console.log(obj.name);
      }
    });
  };

  const handleColumnNullChecker = (col) => {
    ColumnList.forEach((obj) => {
      if (obj.id == col) {
        obj.isNull = true;
        setRowsNullChecker(true);
        console.log(obj.name);
      }
    });
  };

  const handleNullChecker = (row, col) => {
    if (TrueChecker()) {
      setCheckAllNullChecker(true);
      handleRowsNullChecker(col);
      handleColumnNullChecker(row);
    } else {
      setCheckAllNullChecker(false);
    }
  };

  useEffect(() => {
    TrueChecker();
  }, [permissionList, checkAllNullChecker]);

  return (
    <div className="main">
      <div className="rowsList">
        <div className="spacer"></div>
        <div className="checkAll">CheckAll</div>
        {RowsList.map((list) => (
          <div key={list.id} className="rowName">
            <p>{list.name}</p>
            {list.isNull == rowsNullChecker}
            {/* {list.isNull && <p className="null">Null</p>} */}
          </div>
        ))}
      </div>
      <div className="wrapper">
        <div className="column">
          {ColumnList.map((colHeader) => (
            <div key={colHeader.id} className="columnName">
              <p>{colHeader.name}</p>
              {/* {colHeader.isNull == columnNullChecker}
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
              )} */}
            </div>
          ))}
        </div>
        <div className="checkboxes">
          {permissionList.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
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
                      color: lightBlue[800],
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
