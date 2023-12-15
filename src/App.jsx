import CrudForm from "./CrudForm.jsx";
import FilterForm from "./FilterForm.jsx";
import UsersDisplay from "./UsersDiplay.jsx";
import './App.css'

export default function App() {

  return (
    <>
      <header className="box">
        <h1>CRUD Application</h1>
      </header>
      <main>
        <aside className="box">
            <CrudForm />
        </aside>
        <div className="main-container">
            <FilterForm />
            <UsersDisplay />
        </div>
      </main>
      <footer className="box">created with 🖤❤️‍️ and hard work</footer>
    </>
  )
}