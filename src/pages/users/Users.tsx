
 import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
   



const Users = () => {
  return (
    <div className="users">
        <div className="info">
        <h1 className="title">Users</h1>
        <button className="addButton">Add New User</button>

        </div>
       <DataTable/>
    </div>
     
  )
}

export default Users