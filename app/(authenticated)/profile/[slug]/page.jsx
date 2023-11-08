"use client";
import Profile from "./Profile";
import { useEffect } from "react";

import { getProfile } from "./usersapi";

export default function Page({ params }) {
  useEffect(() => {
    getProfile(params.slug).then((data) => {
      console.log(data);
    });
  });

  return <Profile />;
}
