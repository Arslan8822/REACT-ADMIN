import {
  DataGrid,
  GridColDef,
  GridToolbar,
  
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type RowType = {
  id: number | string;
  [key: string]: any;
};

type Props = {
  columns: GridColDef[];
  rows: RowType[];
  slug: string;
};

const DataTable = (props: Props) => {

  const handleDelete = (id: number | string) => {
    console.log(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      const rowId = params.row.id as number | string;

      return (
        <div className="action">
          <Link to={`/${props.slug}/${rowId}`}>
            <img src="/view.svg" alt="View" />
          </Link>

          <div className="delete" onClick={() => handleDelete(rowId)}>
            <img src="/delete.svg" alt="Delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        showToolbar
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
