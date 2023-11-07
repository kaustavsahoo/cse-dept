'use server';

import dbConnect from '../../lib/dbConnect';
import User from '../../models/User'
import { getServerSession } from "next-auth"


async function createUserIfNotExists() {
    const session = await getServerSession();
    const { name, email, image } = session.user;

    await dbConnect();

    try {
        // Check if a user with the provided email already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // User with the same email already exists, do nothing
            console.log('User with the same email already exists.');
        } else {
            // Create a new user with the provided userObject
            const newUser = new User({
                name, email, image
            });
            await newUser.save();
            console.log('User created successfully.');
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

export { createUserIfNotExists };