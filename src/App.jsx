import CrudForm from "./CrudForm.jsx";
import FilterForm from "./FilterForm.jsx";
import UsersDisplay from "./UsersDiplay.jsx";
import { useState, useEffect } from "react";
import { fetchData } from "./Utilities.jsx";
import './App.css'

export default function App() {
  const [users, setUsers] = useState([]);

  
  async function fetchUsers(){
    let data = await fetchData();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <>
      <header className="box">
        <h1>CRUD Application</h1>
      </header>
      <main>
        <aside className="box">
          <CrudForm setUsers={setUsers} users={users}/>
        </aside>
        <div className="main-container">
          <FilterForm setUsers={setUsers} users={users}/>
          <UsersDisplay users={users}/>
        </div>
      </main>
      <footer className="box">created with 🖤❤️‍️ and hard work</footer>
    </>
  )
}