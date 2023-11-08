"use server";

import { getAllUsers } from "../usersapi";
import UserList from "./UserList";

export default async function Directory() {
    const users = await getAllUsers();

    return (
        <div>
            <h1>Directory</h1>
            <UserList users={users} />
        </div>
    )
}