import "./App.css";
import { useState, useEffect } from "react";
import { headersList, permissionArray, checkAll } from "./utils";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [permissionList, setPermissionList] = useState(permissionArray);
  const [headerCheck, setHeaderCheck] = useState(permissionArray);
  const [tableHeader, setTableHeader] = useState(headersList);
  const [checkAllNull, setAllcheckNull] = useState(false);

  // const [TableHeaderNull , setTableHeadeNull] = useState(headersList);
  // const [SideHeaderNull , setSideHeadeNull] = useState(permissionArray);

  // for single checkboxes

  const handleCheckBoxChange = (selfIndex, parentIndex) => {
    const updatedPermissionList = permissionList.map((permission) => {
      if (permission.id === parentIndex) {
        const updatedPermissionGroup = permission.permission_group.map(
          (item) => {
            if (item.id === selfIndex) {
              return {
                ...item,
                value: !item.value,
              };
            }
            return item;
          }
        );
        return {
          ...permission,
          permission_group: updatedPermissionGroup,
        };
      }
      return permission;
    });
    setPermissionList(updatedPermissionList);
  };

  // for all checkboxes

  const functionMultiCheck = () => {
    permissionList.forEach((permission) => {
      permission.value = true;
      permission.permission_group.forEach((permissionGroup) => {
        permissionGroup.value = true;
        console.log(permissionGroup.value);
      });
    });

    headersList.forEach((header_permission) => {
      header_permission.value = true;
    });
  };

  const functionUnMultiCheck = () => {
    setIsChecked(false);
    permissionList.forEach((permission) => {
      permission.value = false;
      permission.permission_group.forEach((permissionGroup) => {
        permissionGroup.value = false;
        console.log(permissionGroup.value);
      });
    });
    headersList.forEach((header_permission) => {
      header_permission.value = false;
      console.log("header " + header_permission.value);
    });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      functionMultiCheck();
    } else {
      functionUnMultiCheck();
    }
  };

  // for sideHeader checkboxes

  const handleCheckHeaderBoxChange = (Index) => {
    setPermissionList((prevPermissionList) => {
      const updatedPermissionList = prevPermissionList.map((permission) => {
        if (permission.id === Index) {
          const updatedPermission = {
            ...permission,
            value: !permission.value,
            permission_group: permission.permission_group.map((permissionGroup) => ({
              ...permissionGroup,
              value: !permission.value,
            })),
          };
          return updatedPermission;
        }
        return permission;
      });
  
      return updatedPermissionList;
    });
  };
  
  

  // for table header checkboxes
  const handleCheckTableHeaderBoxChange = (Index) => {
    headersList.forEach((header) => {
      if (header.id === Index) {
        header.value = !header.value;
        setTableHeader(header);
        console.log(header.name + " " + header.value);
      }
    });
    permissionArray.forEach((permission) => {
      permission.permission_group.forEach((item) => {
        if (item.id == Index) {
          item.value = !item.value;
        }
      });
    });
  };

  // null checkers

  // null checker for checkAll
  const FuncCheckNullAll = () => {
    let isAnyChecked = false;
  
    for (let i = 0; i < permissionArray.length; i++) {
      const category = permissionArray[i];
  
      if (category.value === true) {
        isAnyChecked = true;
        break;
      }
  
      for (let j = 0; j < category.permission_group.length; j++) {
        const permission = category.permission_group[j];
  
        if (permission.value === true) {
          isAnyChecked = true;
          break;
        }
  
        console.log(
          `Permission ${permission.name} - value: ${permission.value}`
        );
      }
  
      if (isAnyChecked) {
        break;
      }
    }
  
    setAllcheckNull(isAnyChecked);
  };
  

  // null checker for tableHeaders
  // null checker for sideHeaders

  useEffect(() => {
    FuncCheckNullAll();
  }, [permissionList, headersList]);

  return (
    <table>
      <thead>
        <tr className="main__header">
          <th>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            {checkAll.name}
            {checkAllNull ? <p className="tabHeaderNull">null</p> : null}
          </th>

          {headersList.map((header) => (
            <th key={header.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => {
                  setTableHeader(prevHeader => ({...prevHeader, [header.id]: !prevHeader[header.id]}));
                  handleCheckTableHeaderBoxChange(header.id);
                }}
                checked={header.value}
              />
              {header.name}
              {header.nullPointer && <p className="tabHeaderNull">null</p>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {permissionList.map((item) => (
          <tr key={item.id}>
            <td className="header">
              <input
                type="checkbox"
                defaultChecked={false}
                checked={item.value}
                onChange={() => {
                  setHeaderCheck(prevHeader => ({...prevHeader, [item.id]: !prevHeader[item.id]}));
                  handleCheckHeaderBoxChange(item.id);
                }}
              />
              {item.name}
              {item.nullPointer && <p className="tabHeaderNull">null</p>}
            </td>
            <td className="permissions">
              {item.permission_group.map((permission) => (
                <div className="checkedBoxes" key={permission.id}>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    checked={permission.value}
                    onChange={() => {
                      handleCheckBoxChange(permission.id, item.id);
                      FuncCheckNullAll();
                    }}
                  />
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}