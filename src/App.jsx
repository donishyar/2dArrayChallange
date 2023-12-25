import "./App.css";
import { useState, useEffect } from "react";



let headersList = [
  {
    name: "List",
    value : true
  },
  {
    name: "Create",
    value : false
  },
  {
    name: "Edit",
    value : true
  },
  {
    name: "Show",
    value : false
  },
  {
    name: "Delete",
    value : true
  },
  {
    name: "Export",
    value : false
  },
  {
    name: "Import",
    value : true
  }
];

export default function Home() {
  const [MultiCheck, setMultiCheck] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [permissionList, setPermissionList] = useState ([
    {
      id: 0,
      value: true,
      name: "Dashboard",
      permission_group: [
        {
          id: 0,
          name: "list",
          value: false,
        },
        {
          id: 1,
          name: "create",
          value: false,
        },
        {
          id: 2,
          name: "edit",
          value: false,
        },
        {
          id: 3,
          name: "show",
          value: false,
        },
        {
          id: 4,
          name: "delete",
          value: false,
        },
        {
          id: 5,
          name: "export",
          value: false,
        },
        {
          id: 6,
          name: "import",
          value: false,
        },
      ],
    },
    {
      id: 1,
      value: false,
      name: "Storage",
      permission_group: [
        {
          id: 0,
          name: "list",
          value: false,
        },
        {
          id: 1,
          name: "create",
          value: false,
        },
        {
          id: 2,
          name: "edit",
          value: false,
        },
        {
          id: 3,
          name: "show",
          value: false,
        },
        {
          id: 4,
          name: "delete",
          value: false,
        },
        {
          id: 5,
          name: "export",
          value: false,
        },
        {
          id: 6,
          name: "import",
          value: false,
        },
      ],
    },
    {
      id: 2,
      value: true,
      name: "Role",
      permission_group: [
        {
          id: 0,
          name: "list",
          value: false,
        },
        {
          id: 1,
          name: "create",
          value: false,
        },
        {
          id: 2,
          name: "edit",
          value: false,
        },
        {
          id: 3,
          name: "show",
          value: false,
        },
        {
          id: 4,
          name: "delete",
          value: false,
        },
        {
          id: 5,
          name: "export",
          value: false,
        },
        {
          id: 6,
          name: "import",
          value: false,
        },
      ],
    },
    {
      id: 3,
      value: false,
      name: "Stock out",
      permission_group: [
        {
          id: 0,
          name: "list",
          value: false,
        },
        {
          id: 1,
          name: "create",
          value: true,
        },
        {
          id: 2,
          name: "edit",
          value: false,
        },
        {
          id: 3,
          name: "show",
          value: false,
        },
        {
          id: 4,
          name: "delete",
          value: false,
        },
        {
          id: 5,
          name: "export",
          value: false,
        },
        {
          id: 6,
          name: "import",
          value: false,
        },
      ],
    },
    {
      id: 4,
      value: true,
      name: "Invoice",
      permission_group: [
        {
          id: 0,
          name: "list",
          value: false,
        },
        {
          id: 1,
          name: "create",
          value: false,
        },
        {
          id: 2,
          name: "edit",
          value: true,
        },
        {
          id: 3,
          name: "show",
          value: false,
        },
        {
          id: 4,
          name: "delete",
          value: true,
        },
        {
          id: 5,
          name: "export",
          value: false,
        },
        {
          id: 6,
          name: "import",
          value: false,
        },
      ],
    },
    {
      id: 5,
      value: false,
      name: "User",
      permission_group: [
        {
          id: 0,
          name: "list",
          value: true,
        },
        {
          id: 1,
          name: "create",
          value: false,
        },
        {
          id: 2,
          name: "edit",
          value: false,
        },
        {
          id: 3,
          name: "show",
          value: true,
        },
        {
          id: 4,
          name: "delete",
          value: false,
        },
        {
          id: 5,
          name: "export",
          value: true,
        },
        {
          id: 6,
          name: "import",
          value: false,
        },
      ],
    },
  ]);

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


  const functionMultiCheck = () => {
    setMultiCheck(true);
    permissionList.forEach((permission) => {
      permission.value = true;
      permission.permission_group.forEach((permissionGroup) => {
        permissionGroup.value = true;
        console.log(permissionGroup.value);
      });
    });

    headersList.forEach((header_permission) => {
      header_permission.value = true;
    })
  };




  const functionUnMultiCheck = () => {
    setMultiCheck(false);
    permissionList.forEach((permission) => {
      permission.value = false;
      permission.permission_group.forEach((permissionGroup) => {
        permissionGroup.value = false 
        console.log(permissionGroup.value);
      });
    });
    headersList.forEach((header_permission) => {
      header_permission.value = false;
      console.log("header "+header_permission.value)
    })
  };



  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      functionMultiCheck();
    } else {
      functionUnMultiCheck();
    }
  };

  



  useEffect(() => {
    permissionList;
    headersList;
    MultiCheck;
  });

  // function MultiCheck which change all values to true
  // function CheckRow which change all values of same col to true
  // function CheckTrue which checks all values if was true change to MultiCheck and the header of the column to null

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            Check All
          </th>

          {headersList.map((header) => {
            return (
              <th key={header.id}>
                <input type="checkbox" defaultChecked={false} checked={header.value} /> {header.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {permissionList.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <input type="checkbox"  defaultChecked={false} checked={item.value}/> {item.name}
              </td>
              <td className="permissions">
                {item.permission_group.map((permission) => {
                  return (
                    <div className="checkedBoxes" key={permission.id}>
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        checked={permission.value}
                        onChange={() => {handleCheckBoxChange(permission.id, item.id)}}
                        
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
