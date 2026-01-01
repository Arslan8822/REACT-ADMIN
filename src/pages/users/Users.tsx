
 import "./users.scss";
    import DataTable from "../../components/dataTable/DataTable";



const Users = () => {
  return (
    <div className="users">
        <div className="info">
        <h1 className="title">Users</h1>
        <button className="addButton">Add New User</button>
        </div>
       <DataTable
         columns={[]} // Replace with your columns definition
         rows={[]}    // Replace with your rows data
         slug="users" // Replace with the appropriate slug if needed
       />
    </div>
     
  )
}

export default Users