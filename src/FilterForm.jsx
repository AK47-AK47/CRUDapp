import { useState, useRef } from "react";
import { fetchData, filterUsers } from "./Utilities.jsx";
import "./FilterForm.css";

export default function FilterForm(props) {
    const [filterValue, setFilterValue] = useState("");
    const [sortAscending, setSortAscending] = useState(true);
    const [buttonText, setButtontext] = useState("Sort By Name");
    

    async function handleOnChange(e){
        setFilterValue(e.target.value);
        setButtontext("Sort By Name");
        //set new filtered users
        let filteredUsers = await filterUsers(e.target.value);
        props.setUsers(filteredUsers);
    }

    //on click button > sort users
    async function handleOnClick() {

        //get filtered users based on filter input (filterValue)
        let filteredUsers = await filterUsers(filterValue);
        //sort asc
        if (sortAscending) {
            filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
            setSortAscending(false);
            setButtontext("Sort By Name ▲");
          }
          else{//sort desc
            filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
            setSortAscending(true);
            setButtontext("Sort By Name ▼");
        }
        //set filtered users
        props.setUsers(filteredUsers);
    }
    
    return (
        <form className="filter-form" name="filterForm" action="" method="">
            <div className="filter-form-row">
                <label htmlFor="filter">Filter By Name:</label>
                <input name="filterInput" type="text" onChange={handleOnChange} value={filterValue}/>
                <button name="sortButton" type="button" onClick={handleOnClick}>{buttonText}</button>
            </div>
        </form>
    );
}