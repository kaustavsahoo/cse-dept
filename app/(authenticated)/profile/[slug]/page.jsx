"use server";

import React from "react";
import { getProfile } from "./profilesapi"; // Import your API function
import ErrorMessage from "./ErrorMessage"; // Import the custom error message component
import Profile from "./Profile"; // Import the component that will display the profile
import { getUserId } from "../../usersapi";

export default async function Page({ params }) {
  try {
    const profile = await getProfile(params.slug);

    const userId = await getUserId();

    const canEditProfile = params.slug == userId;


    return <Profile profile={profile} canEdit={canEditProfile} />;
  } catch (e) {
    return <ErrorMessage />;
  }
}
