import { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";
import "./UsersDisplay.css";

export default function UsersDiplay() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error("Sorry something went wrong");
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div className="user-container">
            {
                users.map(user => <UserCard key={user.id} user={user} />)
            }
        </div>
    );
}