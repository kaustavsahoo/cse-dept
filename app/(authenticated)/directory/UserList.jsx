"use client"

import UserCard from "../../../components/UserCard";

export default function UserList({ users }) {
    return (
        <div>
            {users.map((user, i) => (
                <UserCard user={user} key={i}/>
            ))}
        </div>
    )
}