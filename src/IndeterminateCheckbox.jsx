import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./IndeterminateCheckbox.css";
import { ColumnList, initialPermissionList, RowNames, RowsList } from "./utils";

const ParentChildApp = () => {
  const [permissionList, setPermissionList] = useState(initialPermissionList);

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
    const updatedPermissions = [...permissionList];
    for (let i = 0; i < initialPermissionList.length; i++) {
      updatedPermissions[i] = updatedPermissions[i].map((child) => !child);
      setPermissionList(updatedPermissions);
    }
  };

  const handleParentChange = (parentIndex) => {
    if (parentIndex == 0) {
      handleCheckAll();
    } else {
      const updatedPermissions = [...permissionList];
      updatedPermissions[parentIndex] = updatedPermissions[parentIndex].map(
        (child) => !child
      );
      setPermissionList(updatedPermissions);
    }
  };

  const handleChildChange = (parentIndex, childIndex) => {
    if (parentIndex == 0) {
      handleCheckColumnCheckbox(parentIndex, childIndex);
    } else {
      const updatedPermissions = [...permissionList];
      updatedPermissions[parentIndex][childIndex] =
        !updatedPermissions[parentIndex][childIndex];
      setPermissionList(updatedPermissions);
      if(ColumnList.some((col) => col.id === childIndex+1)){
        ColumnList.forEach((col)=> {
          if(col.id === childIndex+1){
            col.isNull = true;
          }else{
            col.isNull = false;
          }
        })
      }
      console.log(
        "from handleChild function " + parentIndex + " " + childIndex
      );
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
              indeterminate={
                parentIndex === 0
                  ? ColumnList.some((col) => col.isNull === true && col.id === childIndex+1)
                  : null
              }
              checked={permissionList[parentIndex][childIndex]}
              onChange={() => handleChildChange(parentIndex, childIndex)}
            />
          }
        />
      ))}
    </Box>
  );

  useEffect(() => {}, [initialPermissionList]);

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
                  parentIndex === 0
                    ? (!permissionList[parentIndex].every((child) => child) &&
                        permissionList[parentIndex].some((child) => child)) ||
                      permissionList.some((perm) => perm.some((child) => child))
                    : !permissionList[parentIndex].every((child) => child) &&
                      permissionList[parentIndex].some((child) => child)
                }
                onChange={() => handleParentChange(parentIndex)}
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
