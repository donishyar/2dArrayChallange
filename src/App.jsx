import './App.css'


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

export default function Home() {

  
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" /> Check All{" "}
          </th>
          <th>
            <input type="checkbox" /> List{" "}
          </th>
          <th>
            {" "}
            <input type="checkbox" /> Create{" "}
          </th>
          <th>
            <input type="checkbox" /> Edit{" "}
          </th>
          <th>
            <input type="checkbox" /> Show
          </th>
          <th>
            <input type="checkbox" /> Delete
          </th>
          <th>
            <input type="checkbox" /> Export
          </th>
          <th>
            <input type="checkbox" /> Import
          </th>
        </tr>
      </thead>
      <tbody>
        {permissionList.map((item) => {
          return (
            <tr
              key={item.id}
            >
              <td>
                <input type="checkbox" /> {item.name}
              </td>
              <td className="permissions">
              {item.permission_group.map((permission) => {
                  return (
                    <td className="checkedBoxes"  key={permission.id}>
                      <input type="checkbox" checked={permission.value}/>
                    </td>
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
