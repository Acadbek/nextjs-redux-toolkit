import Link from "next/link";
import { useSelector } from "react-redux";

export default function About() {
  const user = useSelector((state) => state.posts);
  console.log(user, "user");

  return (
    <div>
      <h1>Post List</h1>
      <button>
        <Link href={"/create"}>Create</Link>
      </button>
      {/* {user?.loading && <h2>Loading...</h2>}
      {!user?.loading && user?.error ? <h2>Error: {user?.error}</h2> : null}
      {!user?.loading && user?.users?.length ? <ul></ul> : null} */}
      {user?.posts?.map((user) => (
        <li key={user?.id}>{user?.title}</li>
      ))}
    </div>
  );
}
