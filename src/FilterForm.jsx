import { useState } from "react";
import "./FilterForm.css";

export default function FilterForm() {
    const [filterValue, setFilterValue] = useState("");

    function hadleOnChange(e) {
        setFilterValue(e.target.value);
    }
    
    return (
        <form className="filter-form" name="filterForm" action="" method="">
            <div className="filter-form-row">
                <label htmlFor="filter">Filter By Name:</label>
                <input id="filter" name="filterInput" type="text" onChange={hadleOnChange} value={filterValue}/>
                <button name="sortButton" type="button">Sort By Name</button>
            </div>
        </form>
    );
}