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

    async function handleOnClick() {
        console.log("filterValue",filterValue);
        let filteredUsers = await filterUsers(filterValue);
        if(sortAscending){
            //document.forms.filterForm.sortButton.innerHTML = "Sort By Name &#9650";//triangle up character ▲ HTML code
            filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
            setSortAscending(false);
            setButtontext("Sort By Name ▲");
          }
          else{//sort desc
            //document.forms.filterForm.sortButton.innerHTML = "Sort By Name &#9660";//triangle down character ▼ unicode
            filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
            setSortAscending(true);
            setButtontext("Sort By Name ▼");
        }
        props.setUsers(filteredUsers);
    }
    
    return (
        <form className="filter-form" name="filterForm" action="" method="">
            <div className="filter-form-row">
                <label htmlFor="filter">Filter By Name:</label>
                <input id="filter" name="filterInput" type="text" onChange={handleOnChange} value={filterValue}/>
                <button name="sortButton" type="button" onClick={handleOnClick}>{buttonText}</button>
            </div>
        </form>
    );
}