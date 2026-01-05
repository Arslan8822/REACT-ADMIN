// import {
//   DataGrid,
//   GridColDef,
//   GridToolbarContainer,
//   GridToolbarQuickFilter,
// } from "@mui/x-data-grid";
// import "./dataTable.scss";
// import{ useState } from "react";

// // ✅ Define row type FIRST
// type RowType = {
//   id: number;
//   firstName?: string | null;
//   lastName?: string | null;
//   age?: number | null;
//   img?: string;
// };

// // ✅ Custom Toolbar (FIXES ERROR)
// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarQuickFilter debounceMs={500} />
//     </GridToolbarContainer>
//   );
// }

// // ✅ Rows
// const rows: RowType[] = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// // ✅ Columns
// const columns: GridColDef<RowType>[] = [
//   { field: "id", headerName: "ID", width: 90 },

//   {
//     field: "avatar",
//     headerName: "Avatar",
//     width: 100,
//     renderCell: (params) => (
//       <img
//         src={params.row.img || "/noavatar.png"}
//         alt=""
//         style={{ width: 32, height: 32, borderRadius: "50%" }}
//       />
//     ),
//   },

//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },

//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },

//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },

//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (_value, row) =>
//       `${row.firstName ?? ""} ${row.lastName ?? ""}`,
//   },
// ];
// const CustomToolbar = ({ onFilter }: { onFilter: (value: string) => void }) => {
//   return (
//     <GridToolbarContainer>
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => onFilter(e.target.value)}
//         style={{ padding: "4px", margin: "4px", width: "200px" }}
//       />
//     </GridToolbarContainer>
//   );
// };

// const DataTable = () => {
//    const [filter, setFilter] = useState("");

//   // Filter rows manually by firstName or lastName
//   const filteredRows = rows.filter(
//     (row) =>
//       row.firstName?.toLowerCase().includes(filter.toLowerCase()) ||
//       row.lastName?.toLowerCase().includes(filter.toLowerCase())
//   );
//   return (
//     <div className="dataTable">
//       <DataGrid
//         rows={filteredRows}
//         columns={columns}
//         slots={{ toolbar: () => <CustomToolbar onFilter={setFilter} /> }}
//         pageSizeOptions={[5, 10, 20]}
//         initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
//       />
//     </div>
//   );
// };

// export default DataTable;
















// import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png"}
        alt=""
        style={{ width: 32, height: 32, borderRadius: "50%" }}
      />
    ),
  },
  { field: "firstName", headerName: "First name", width: 150, editable: true },
  { field: "lastName", headerName: "Last name", width: 150, editable: true },
  { field: "age", headerName: "Age", type: "number", width: 110, editable: true },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_value, row) => `${row.firstName ?? ""} ${row.lastName ?? ""}`,
  },
];

// Custom toolbar with search input at top left
// const CustomToolbar = ({ onFilter }: { onFilter: (value: string) => void }) => {
//   return (
//     <div
//       style={{
//         padding: "8px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         gap: "12px",
//         backgroundColor: "#f5f5f5",
//         borderBottom: "1px solid rgba(224, 224, 224, 1)",
//       }}
//     >
//       <input
//         type="search"
//         placeholder="Search..."
//         onChange={(e) => onFilter(e.target.value)}
//         style={{
//           padding: "6px 12px",
//           fontSize: 14,
//           borderRadius: 4,
//           border: "1px solid #ccc",
//           width: 250,
//         }}
//       />
//     </div>
//   );
// };

export default function DataTable() {
  // const [filter, setFilter] = useState("");
  // const filteredRows = rows.filter(
  //   (row) =>
  //     row.firstName?.toLowerCase().includes(filter.toLowerCase()) ||
  //     row.lastName?.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
         rows={rows}
        columns={columns}
        // slots={{ toolbar: () => <CustomToolbar onFilter={setFilter} /> }}
        pageSizeOptions={[ 10, 20 , 30]}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
      />
    </div>
  );
}
