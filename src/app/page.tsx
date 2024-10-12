"use client";

import { createUser } from "./action";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "50vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Signed in as {session.user?.email} <br />
          <button
            onClick={() => signOut()}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Sign out
          </button>
          <form
            action={createUser}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input placeholder="name" name="name" />
            <input
              placeholder="email"
              name="email"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
