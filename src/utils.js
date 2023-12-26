let headersList = [
    {
      id: 0,
      name: "List",
      value: true,
    },
    {
      id: 1,
      name: "Create",
      value: false,
    },
    {
      id: 2,
      name: "Edit",
      value: true,
    },
    {
      id: 3,
      name: "Show",
      value: false,
    },
    {
      id: 4,
      name: "Delete",
      value: true,
    },
    {
      id: 5,
      name: "Export",
      value: false,
    },
    {
      id: 6,
      name: "Import",
      value: true,
    },
  ];
  
  const permissionArray = [
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
  ];


   export {headersList,permissionArray}