import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/data";

const Home = () => {
  const user = useSelector((state) => state.data); // main data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <button>
        <Link href={"/posts"}>POST</Link>
      </button>
      <button>
        <Link href={"/create"}>go to create page</Link>
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
};

export default Home;
