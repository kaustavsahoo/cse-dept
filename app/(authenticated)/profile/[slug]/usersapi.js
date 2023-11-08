"use server";

import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/User";

import { getServerSession } from "next-auth";
import { convertObjectIdsToStrings } from "../../../../lib/dbHelpers";
import { ObjectId } from "mongodb";

async function getProfile(email) {
  await dbConnect();

  const user = await User.find({ email });

  if (user) {
    return convertObjectIdsToStrings(user);
  } else {
    throw "invalid account";
  }
}

export { getProfile };
