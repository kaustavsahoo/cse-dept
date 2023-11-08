"use server";

import React from "react";
import { getProfile } from "./profilesapi"; // Import your API function
import ErrorMessage from "./ErrorMessage"; // Import the custom error message component
import Profile from "./Profile"; // Import the component that will display the profile

export default async function Page({ params }) {
  try {
    const profile = await getProfile(params.slug);
    return <Profile profile={profile} />;
  } catch (e) {
    return <ErrorMessage />;
  }
}
