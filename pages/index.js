import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/data";

export default function Home() {
  const user = useSelector((state) => state.data);
  console.log(user, "user");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      {user?.loading && <h2>Loading...</h2>}
      {!user?.loading && user?.error ? <h2>Error: {user?.error}</h2> : null}
      {!user?.loading && user?.users?.length ? (
        <ul>
          {user?.users?.map((user) => (
            <li style={{ color: "red" }} key={user?.id}>
              {user?.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
