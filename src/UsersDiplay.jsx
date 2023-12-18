
import UserCard from "./UserCard.jsx";
import "./UsersDisplay.css";

export default function UsersDiplay(props) {
    return (
        <div className="user-container">
            { props.users.map(user => <UserCard key={user.id} user={user} />) }
        </div>
    );
}