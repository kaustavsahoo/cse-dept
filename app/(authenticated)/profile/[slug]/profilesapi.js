"use server";

import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/User";

import { getServerSession } from "next-auth";
import { convertObjectIdsToStrings } from "../../../../lib/dbHelpers";
import { ObjectId } from "mongodb";

async function getProfile(id) {
  await dbConnect();

  const user = await User.findById(id);

  if (user) {
    return convertObjectIdsToStrings(user);
  } else {
    throw "invalid account";
  }
}

async function updateBio(newBio) {
  await dbConnect();

  const session = await getServerSession();
  const { email } = session.user;
  const user = await User.findOne({ email });

  user.bio = newBio;
  await user.save();
}

export { getProfile, updateBio };
