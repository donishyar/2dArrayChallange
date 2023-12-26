import "./App.css";
import { useState, useEffect } from "react";
import {headersList,permissionArray,checkAll} from "./utils"



export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [permissionList, setPermissionList] = useState(permissionArray);
  const [headerCheck, setHeaderCheck] = useState(permissionArray);
  const [tableHeader , setTableHeader] = useState(headersList);
  const [checkAllNull , setAllcheckNull] = useState(false);

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
  permissionArray.forEach((permission) => {
    if(permission.id === Index){
      permission.value = !permission.value
      setHeaderCheck(permission);
      if(permission.value){
        permission.permission_group.forEach((permissionGroup) => {
          permissionGroup.value = true;
          console.log(permissionGroup.value);
        });
      }else{
        permission.permission_group.forEach((permissionGroup) => {
          permissionGroup.value = false;
          console.log(permissionGroup.value);
        });
      } 
    }
  })
};


// for table header checkboxes
const handleCheckTableHeaderBoxChange = (Index) => {
  headersList.forEach((header) => {
    if(header.id === Index){
      header.value = !header.value
      setTableHeader(header);
      console.log(header.name+" "+header.value)
      
      } 
    })
    permissionArray.forEach((permission)=> {
      permission.permission_group.forEach((item)=> {
        if(item.id == Index ){
          item.value = !item.value
        }
      })
    })
  };


  // null checkers 

  // null checker for checkAll
  const FuncCheckNullAll = () => {
    for (let i = 0; i < permissionArray.length; i++) {
      if(permissionArray[i].value == true){
        return true;
      }else {
      const category = permissionArray[i];
      for (let j = 0; j < category.permission_group.length; j++) {
        const permission = category.permission_group[j];
        if(permission.value == true){
          return true;
        }
        console.log(`  Permission ${permission.name} - value: ${permission.value}`);
      }
    }
    }
  };
  

  // null checker for tableHeaders
  // null checker for sideHeaders



  useEffect(() => {
    
  }, [headerCheck,isChecked,tableHeader,]);

  // function for header

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
            {checkAllNull ? <p className="tabHeaderNull">null</p>:<p></p>}
          </th>

          {headersList.map((header) => {
            return (
              <th key={header.id}>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={()=> {handleCheckTableHeaderBoxChange(header.id)}}
                    checked={header.value}
                  />
                  {header.name}
                  {header.nullPointer ? <p className="tabHeaderNull">null</p>:<p></p>}
                </td>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {permissionList.map((item) => {
          return (
            <tr key={item.id} >
              <td className="header">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  checked={item.value}
                  onChange={()=> {handleCheckHeaderBoxChange(item.id);}}
                />
                {item.name}
                {item.nullPointer ? <p className="tabHeaderNull">null</p>:<p></p>}
              </td>
              <td className="permissions">
                {item.permission_group.map((permission) => {
                  return (
                    <div className="checkedBoxes" key={permission.id}>
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        checked={permission.value}
                        onChange={() => {
                          handleCheckBoxChange(permission.id, item.id),
                          setAllcheckNull(FuncCheckNullAll());
                        }}
                      />
                    </div>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
