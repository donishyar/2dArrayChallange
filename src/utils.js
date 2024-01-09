export const initialPermissionList = [
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

export const ColumnList = [
  {
    id: 1,
    name: "List",
    isNull: false,
    children: [
      initialPermissionList[1][1],
      initialPermissionList[2][1],
      initialPermissionList[3][1],
      initialPermissionList[4][1],
      initialPermissionList[5][1],
      initialPermissionList[6][1],
      initialPermissionList[7][1],
      initialPermissionList[8][1],
    ],
  },
  {
    id: 2,
    name: "create",
    isNull: false,
    children: [
      initialPermissionList[1][2],
      initialPermissionList[2][2],
      initialPermissionList[3][2],
      initialPermissionList[4][2],
      initialPermissionList[5][2],
      initialPermissionList[6][2],
      initialPermissionList[7][2],
      initialPermissionList[8][2],
    ],
  },
  {
    id: 3,
    name: "Edit",
    isNull: false,
    children: [
      initialPermissionList[1][3],
      initialPermissionList[2][3],
      initialPermissionList[3][3],
      initialPermissionList[4][3],
      initialPermissionList[5][3],
      initialPermissionList[6][3],
      initialPermissionList[7][3],
      initialPermissionList[8][3],
    ],
  },
  {
    id: 4,
    name: "Show",
    isNull: false,
    children: [
      initialPermissionList[1][4],
      initialPermissionList[2][4],
      initialPermissionList[3][4],
      initialPermissionList[4][4],
      initialPermissionList[5][4],
      initialPermissionList[6][4],
      initialPermissionList[7][4],
      initialPermissionList[8][4],
    ],
  },
  {
    id: 5,
    name: "Delete",
    isNull: false,
    children: [
      initialPermissionList[1][5],
      initialPermissionList[2][5],
      initialPermissionList[3][5],
      initialPermissionList[4][5],
      initialPermissionList[5][5],
      initialPermissionList[6][5],
      initialPermissionList[7][5],
      initialPermissionList[8][5],
    ],
  },
  {
    id: 6,
    name: "Export",
    isNull: false,
    children: [
      initialPermissionList[1][6],
      initialPermissionList[2][6],
      initialPermissionList[3][6],
      initialPermissionList[4][6],
      initialPermissionList[5][6],
      initialPermissionList[6][6],
      initialPermissionList[7][6],
      initialPermissionList[8][6],
    ],
  },
  {
    id: 7,
    name: "Import",
    isNull: false,
    children: [
      initialPermissionList[1][7],
      initialPermissionList[2][7],
      initialPermissionList[3][7],
      initialPermissionList[4][7],
      initialPermissionList[5][7],
      initialPermissionList[6][7],
      initialPermissionList[7][7],
      initialPermissionList[8][7],
    ],
  },
];

export const RowsList = [
  {
    id: 0,
    name: "Check All",
    isNull: false,
  },
  {
    id: 1,
    name: "DashBoard",
    isNull: false,
  },
  {
    id: 2,
    name: "Storage",
    isNull: false,
  },
  {
    id: 3,
    name: "Custom Provider",
    isNull: false,
  },
  {
    id: 4,
    name: "Stock Out",
    isNull: false,
  },
  {
    id: 5,
    name: "Invoice",
    isNull: false,
  },
  {
    id: 6,
    name: "Unloading",
    isNull: false,
  },
  {
    id: 7,
    name: "User",
    isNull: false,
  },
  {
    id: 8,
    name: "Role",
    isNull: false,
  },
];

export const RowNames = RowsList.map((row) => row.name);
export const ColumnNames = ColumnList.map((row) => row.name);
