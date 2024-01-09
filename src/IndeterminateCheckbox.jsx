import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./IndeterminateCheckbox.css";
import { ColumnList, initialPermissionList, RowNames } from "./utils";

const ParentChildApp = () => {
  const [permissionList, setPermissionList] = useState(initialPermissionList);
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);
  const [columnNullChecker, setColumnNullChecker] = useState(false);

  const handleIndeterminateChange = (parentIndex) => {
    const updatedPermissions = [...permissionList];
    updatedPermissions[parentIndex] = updatedPermissions[parentIndex].map(() =>
      setIndeterminate(indeterminate)
    );
    setPermissionList(updatedPermissions);
  };

  const handleCheckColumnCheckbox = (row, col) => {
    const newPermissionList = [...permissionList];
    newPermissionList[row][col] = !newPermissionList[row][col];
    setPermissionList(newPermissionList);

    if (permissionList[row][col] === true) {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[i][col] = true;
        }
      }
    } else {
      const updatedPermList = [...permissionList];
      for (let i = 0; i < updatedPermList.length; i++) {
        for (let j = 0; j < updatedPermList[i].length; j++) {
          updatedPermList[i][col] = false;
        }
      }
    }
  };

  const handleCheckAll = () => {
    // Assuming you have a state variable to track the current state

    // Update the state variable on each call
    setIsChecked((prevChecked) => !prevChecked);

    // Set all values in permissionList based on the current state
    const updatedPermissions = permissionList.map((permission) =>
      permission.map(() => isChecked)
    );

    // Update the permissionList state
    setPermissionList(updatedPermissions);
  };

  const handleParentChange = (parentIndex) => {
    handleRowsNullChecker();
    if (parentIndex == 0) {
      handleCheckAll();
      setIndeterminate(!indeterminate);
    } else {
      setIsChecked2((prevChecked) => !prevChecked);
      const updatedPermissions = [...permissionList];
      updatedPermissions[parentIndex] = updatedPermissions[parentIndex].map(
        (child) => isChecked2
      );
      setPermissionList(updatedPermissions);
    }
  };

  const handleChildChange = (parentIndex, childIndex) => {
    handleRowsNullChecker();
    if (parentIndex == 0) {
      handleCheckColumnCheckbox(parentIndex, childIndex);
      handleRowsNullChecker(parentIndex, childIndex);
    } else {
      const updatedPermissions = [...permissionList];
      updatedPermissions[parentIndex][childIndex] =
        !updatedPermissions[parentIndex][childIndex];
      setPermissionList(updatedPermissions);
      if (ColumnList.some((col) => col.id === childIndex + 1)) {
        ColumnList.forEach((col) => {
          if (col.id === childIndex + 1) {
            col.isNull = true;
          } else {
            col.isNull = false;
          }
        });
      }
      console.log(
        "from handleChild function " + parentIndex + " " + childIndex
      );
    }
  };

  const handleRowsNullChecker = () => {
    for (let j = 0; j < initialPermissionList[0].length; j++) {
      let hasTrue = false;

      for (let i = 0; i < initialPermissionList.length; i++) {
        if (initialPermissionList[i][j] === true) {
          hasTrue = true;
          break; // Exit the loop if a true value is found in the column
        }
      }

      ColumnList.forEach((col) => {
        if (col.id === j + 1) {
          col.isNull = hasTrue;
        }
      });
    }
  };

  const children = (parentIndex) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: 3,
        justifyContent: "flex-end",
        gap: "1rem",
      }}
    >
      {[...Array(7).keys()].map((childIndex) => (
        <FormControlLabel
          key={childIndex}
          control={
            <Checkbox
              indeterminate={parentIndex === 0 && ColumnList[childIndex].isNull}
              checked={permissionList[parentIndex][childIndex]}
              onChange={() => handleChildChange(parentIndex, childIndex)}
            />
          }
        />
      ))}
    </Box>
  );

  useEffect(() => {}, [initialPermissionList, ColumnList]);

  return (
    <div className="rowList">
      {[...permissionList.keys()].map((parentIndex) => (
        <div
          key={parentIndex}
          className={
            parentIndex === 0
              ? "parentRow"
              : parentIndex % 2 === 0
              ? "Row_odd"
              : "Row_even"
          }
        >
          <FormControlLabel
            className={parentIndex == 0 ? "checkAll" : null}
            label={RowNames[parentIndex]}
            labelPlacement="start"
            sx={{
              display: "flex",
              flexDirection: "row",
              ml: 3,
              justifyContent: "center",
            }}
            control={
              <Checkbox
                checked={permissionList[parentIndex].every((child) => child)}
                indeterminate={
                  parentIndex === 0 && indeterminate
                    ? (!permissionList[parentIndex].every((child) => child) &&
                        permissionList[parentIndex].some((child) => child)) ||
                      permissionList.some((perm) => perm.some((child) => child))
                    : !permissionList[parentIndex].every((child) => child) &&
                      permissionList[parentIndex].some((child) => child)
                }
                onChange={() => handleParentChange(parentIndex)}
                onClick={() => handleIndeterminateChange(parentIndex)}
              />
            }
          />
          {children(parentIndex)}
        </div>
      ))}
    </div>
  );
};

export default ParentChildApp;
