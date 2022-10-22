import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/data";

export default function About() {
  const user = useSelector((state) => state.data);
  console.log(user, "user");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <h1>About page</h1>
      <button>
        <Link href={"/"}>Home Page</Link>
      </button>
      {user?.loading && <h2>Loading...</h2>}
      {!user?.loading && user?.error ? <h2>Error: {user?.error}</h2> : null}
      {!user?.loading && user?.users?.length ? (
        <ul>
          {user?.users?.map((user) => (
            <li key={user?.id}>{user?.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
