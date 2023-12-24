import './App.css'
import { useState ,useEffect} from 'react';


let permissionList = [
  {
    id: 0,
    value: false,
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
    value: false,
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
    value: false,
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
];

let headersList = [
  "List","Create","Edit","Show","Delete","Export" , "Import"
]

export default function Home() {
  const [checkAll,setCheckAll] = useState(null);
  useEffect(() => {
    checkAll
  })

// function CheckAll which change all values to true
// function CheckRow which change all values of same col to true
// function CheckTrue which checks all values if was true change to checkAll and the header of the column to null 





const onCheckAll = () => {
  setCheckAll(true);
  permissionList.forEach(permission => {
    permission.permission_group.forEach(permissionGroup => {
      permissionGroup.value = checkAll;
    });
  });
}


  return (
    <table>
    <thead>
      <tr>
      <th>
        
        <input  type="checkbox" 
                // onChange={onCheckAll}
        />Check All
      </th>

        {headersList.map((header) => {
        return (  
          <th key={header.id}>
            <input type="checkbox" defaultChecked={true} /> {header}
          </th>
        )})

        }


      </tr>
    </thead>
    <tbody>
      {permissionList.map((item) => {
        return (
          <tr key={item.id}>
            <td>
              <input type="checkbox" defaultChecked={true} /> {item.name}
            </td>
            <td className="permissions">
              {item.permission_group.map((permission) => {
                return (
                  <div className="checkedBoxes" key={permission.id}>
                    <input type="checkbox"  defaultChecked={true} checked={permission.value} />
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
