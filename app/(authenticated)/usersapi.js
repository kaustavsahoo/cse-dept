'use server';

import dbConnect from '../../lib/dbConnect';
import { convertObjectIdsToStrings } from '../../lib/dbHelpers';
import User from '../../models/User'
import { getServerSession } from "next-auth"

async function getUserId() {
    await dbConnect(); // Make sure you establish a database connection

    const session = await getServerSession();
    const { email } = session.user;
    const user = await User.findOne({ email });

    return user && user._id;
}

async function getAllUsers() {
    await dbConnect();

    const users = await User.find({}).lean();

    return users.map(user => convertObjectIdsToStrings(user));
}

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

export { createUserIfNotExists, getUserId, getAllUsers };