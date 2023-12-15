import { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";
import "./UsersDisplay.css";

export default function UsersDiplay() {
    const [users, setUsers] = useState([]);

    async function fetchData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div className="user-container">
            {
                users.map(user => <UserCard user={user} />)
            }
        </div>
    );
}