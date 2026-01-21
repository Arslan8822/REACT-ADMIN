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
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 40 },
//   { id: 6, lastName: "Melisandre", firstName: "Alice", age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// const columns: GridColDef[] = [

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
//   { field: "firstName", headerName: "First name", width: 150},
//   { field: "lastName", headerName: "Last name", width: 150 },
//   { field: "age", headerName: "Age", type: "number", width: 110 },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (_value, row) => `${row.firstName ?? ""} ${row.lastName ?? ""}`,
//   },
// ];

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

// export default function DataTable() {
// const [filter, setFilter] = useState("");
// const filteredRows = rows.filter(
//   (row) =>
//     row.firstName?.toLowerCase().includes(filter.toLowerCase()) ||
//     row.lastName?.toLowerCase().includes(filter.toLowerCase())
// );

//   return (
//     <div style={{ height: 450, width: "100%" }}>
//       <DataGrid

//          rows={rows}
//         columns={columns}
//         // slots={{ toolbar: () => <CustomToolbar onFilter={setFilter} /> }}
//         pageSizeOptions={[ 10, 20 , 30]}
//         initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
//       />
//     </div>
//   );
// }

import "./dataTable.scss";
// import Input from "@/components/ui/Input";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

type DataRow = {
  id: number;
  name: string;
  age: number;
  email: string;
  avatar: string;
  status: string;
  actiontaken: string;

};

const columns: { header: string; accessor: keyof DataRow }[] = [
  { header: "ID", accessor: "id" },
  { header: "Avatar", accessor: "avatar" },
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Email", accessor: "email" },
  { header: "Status", accessor: "status" },
  { header: "Action Taken", accessor: "actiontaken" },
];

const data: DataRow[] = [
  {
    id: 1,
    name: "Arslan Tariq",
    age: 28,
    email: "arslan@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 32,
    email: "jane@example.com",
    avatar: "/avatar.jpg",
    status: "Inactive",
    actiontaken: "No",
  },
  {
    id: 3,
    name: "John Smith",
    age: 45,
    email: "john@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 4,
    name: "Alice Johnson",
    age: 29,
    email: "alice@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 5,
    name: "Bob Martin",
    age: 40,
    email: "bob@example.com",
    avatar: "/avatar.jpg",
    status: "Inactive",
    actiontaken: "No",
  },
  {
    id: 6,
    name: "Charlie Brown",
    age: 33,
    email: "charlie@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 7,
    name: "Eve Davis",
    age: 27,
    email: "eve@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 8,
    name: "Frank Moore",
    age: 50,
    email: "frank@example.com",
    avatar: "/avatar.jpg",
    status: "Inactive",
    actiontaken: "No",
  },
  {
    id: 9,
    name: "Arslan Tariq",
    age: 28,
    email: "arslan@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 10,
    name: "Jane Doe",
    age: 32,
    email: "jane@example.com",
    avatar: "/avatar.jpg",
    status: "Inactive",
    actiontaken: "No",
  },
  {
    id: 11,
    name: "John Smith",
    age: 45,
    email: "john@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 12,
    name: "Alice Johnson",
    age: 29,
    email: "alice@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 13,
    name: "Bob Martin",
    age: 40,
    email: "bob@example.com",
    avatar: "/avatar.jpg",
    status: "Inactive",
    actiontaken: "No",
  },
  {
    id: 14,
    name: "Charlie Brown",
    age: 33,
    email: "charlie@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 15,
    name: "Eve Davis",
    age: 27,
    email: "eve@example.com",
    avatar: "/avatar.jpg",
    status: "Active",
    actiontaken: "Yes",
  },
  {
    id: 16,
    name: "Frank Moore",
    age: 50,
    email: "frank@example.com",
    avatar: "/avatar.jpg",
    status: "Inactive",
    actiontaken: "No",
  },
];

import "./dataTable.scss";



export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="w-full overflow-auto">
      {/* 🔍 Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: 250,
            height: 50,
            padding: "0 14px",
            borderRadius: 10,
            border: "none",
            fontSize: 14,
            marginBottom: 10,
          }}
        />
      </div>


      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.accessor}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={col.accessor}>
                  {col.accessor === "avatar" ? (
                    <img
                      src={row.avatar || "/noavatar.png"}
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    row[col.accessor]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="table-footer">
        <div>
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            Previous
          </button>
          <span style={{ margin: "0 12px" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
            Next
          </button>
        </div>

        <div>
          <label>Rows per page:</label>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            {[10, 20, 30, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
