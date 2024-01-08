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
